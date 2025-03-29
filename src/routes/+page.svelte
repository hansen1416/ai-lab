<script lang="ts">
	import { base } from "$app/paths";
	import { browser } from "$app/environment";
	import * as THREE from "three";
	import { onMount, onDestroy } from "svelte";
	import ThreeScene from "../lib/ThreeScene";
	import { loadFbx, loadJSON } from "../lib/ropes";

	type Section2 = {
		anchor: HTMLElement | undefined;
		index: number;
		isActive: boolean;
		isFirst: boolean;
		isLast: boolean;
		item: HTMLElement;
	};

	let threeScene: ThreeScene;

	let canvas: HTMLCanvasElement;

	let animation_pointer = 0;

	let mixer: THREE.AnimationMixer | undefined = undefined;

	let action: THREE.AnimationAction | undefined = undefined;

	let animation_mapping: Array<THREE.AnimationClip | undefined> = [];

	const clock = new THREE.Clock();

	function animate() {
		if (mixer) {
			mixer.update(clock.getDelta());
		}
		// update physics world and threejs renderer
		threeScene.onFrameUpdate();

		animation_pointer = requestAnimationFrame(animate);
	}

	onMount(async () => {
		/** @ts-ignore */
		const fullpage = (await import("fullpage.js")).default;

		new fullpage("#fullpage", {
			licenseKey: "YOUR_KEY_HERE",
			autoScrolling: true,
			loopTop: false,
			loopBottom: false,
			beforeLeave: function () {
				// origin: Section2,
				// destination: Section2,
				// direction: string,
				// trigger: string,
				// This callback is fired right before leaving the section,
				// just before the transition takes place.
				// You can use this callback to prevent and cancel the scroll
				// before it takes place by returning false.

				if (action) {
					action.fadeOut(0.3);
				}

				return true;
			},
			afterLoad: function (_: Section2, destination: Section2) {
				// origin: Section2,
				// destination: Section2,
				// direction: string,
				// trigger: string,
				// Callback fired once the sections have been loaded, after the scrolling has ended.

				if (mixer && animation_mapping[destination.index]) {
					const clip = animation_mapping[
						destination.index
					] as THREE.AnimationClip;

					action = mixer.clipAction(clip);

					action.reset();

					action.setLoop(THREE.LoopOnce, 1);

					// keep model at the position where it stops
					action.clampWhenFinished = true;

					action.enabled = true;

					action.fadeIn(0.5);

					action.play();
				}
			},
		});

		threeScene = new ThreeScene(
			canvas,
			document.documentElement.clientWidth,
			document.documentElement.clientHeight,
		);

		Promise.all([
			loadFbx(
				`${base}/character3967ecff-8E949CFF.fbx`,
				"eva",
				new THREE.Vector3(50, -120, 0),
				new THREE.Euler(0, -0.5, 0),
			),
			loadJSON(`${base}/thankful.json`),
			loadJSON(`${base}/greeting.json`),
		]).then(([eva, thankful, greeting]) => {
			threeScene.scene.add(eva);

			const thankful_clip = THREE.AnimationClip.parse(thankful);
			const greeting_clip = THREE.AnimationClip.parse(greeting);

			animation_mapping.push(thankful_clip);
			animation_mapping.push(undefined);
			animation_mapping.push(undefined);
			animation_mapping.push(greeting_clip);

			mixer = new THREE.AnimationMixer(eva);

			mixer.addEventListener("finished", () => {
				console.log("animation finished");
			});
		});

		animate();
	});

	onDestroy(() => {
		if (browser) {
			cancelAnimationFrame(animation_pointer);

			if (mixer) {
				mixer.stopAllAction();

				mixer.removeEventListener("finished", () => {});
			}

			threeScene.dispose();
		}
	});
</script>

<!-- <a href="{base}/">Home5</a> -->

<div class="canvas-box">
	<canvas bind:this={canvas}></canvas>
</div>

<div id="fullpage">
	<div class="section">Introduction</div>
	<div class="section">Projects</div>
	<div class="section">Staff</div>
	<div class="section">Joint us/contact</div>
</div>

<style lang="scss">
	.canvas-box {
		position: absolute;
		width: 100vw;
		height: 100vh;
		z-index: -9;
		canvas {
			width: 100%;
			height: 100%;
		}
	}

	#fullpage {
		background-color: transparent;

		$font-white: #fff;

		.section {
			height: 100vh;
			display: flex;
			position: relative;
			color: $font-white;
			background-color: transparent;
		}

		:global(.fp-watermark) {
			position: absolute;
			bottom: 10px;
			right: 10px;
			padding: 4px;
			font-size: 14px;
			background-color: rgba(200, 200, 200, 0.3);
		}
	}
</style>
