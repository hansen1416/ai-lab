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

	let new_action: THREE.AnimationAction | undefined = undefined;

	let animation_mapping: Array<THREE.AnimationClip | undefined> = [];

	let current_section_index = $state(0);

	let play_animation = $state(false);

	let time_elapsed = 0;

	const clock = new THREE.Clock();

	function animate() {
		if (mixer) {
			mixer.update(clock.getDelta());
		}

		if (performance.now() - time_elapsed >= 10000) {
			play_animation = true;

			time_elapsed = performance.now();
		}

		// update physics world and threejs renderer
		threeScene.onFrameUpdate();

		animation_pointer = requestAnimationFrame(animate);
	}

	function onAnimationFinished() {
		if (!mixer) {
			return;
		}

		const last_clip_index = animation_mapping.length - 1;

		if (!animation_mapping[last_clip_index]) {
			return;
		}

		// mixer.stopAllAction();
		// if (action) {
		// 	action.stopFading();
		// }

		if (new_action) {
			new_action.fadeOut(0.2);
		}

		action = mixer.clipAction(
			animation_mapping[last_clip_index] as THREE.AnimationClip,
		);

		action.reset();

		// Default is THREE.LoopRepeat (with an infinite number of repetitions)
		action.setLoop(THREE.LoopRepeat, Infinity);

		// keep model at the position where it stops
		action.clampWhenFinished = true;

		action.enabled = true;

		action.fadeIn(0.3);

		action.play();
	}

	onMount(async () => {
		/** @ts-ignore */
		const fullpage = (await import("fullpage.js")).default;

		new fullpage("#fullpage", {
			licenseKey: "YOUR_KEY_HERE",
			autoScrolling: true,
			loopTop: false,
			loopBottom: false,
			beforeLeave: () => {
				// origin: Section2,
				// destination: Section2,
				// direction: string,
				// trigger: string,
				// This callback is fired right before leaving the section,
				// just before the transition takes place.
				// You can use this callback to prevent and cancel the scroll
				// before it takes place by returning false.

				time_elapsed = performance.now();

				return true;
			},
			afterLoad: (_: Section2, destination: Section2) => {
				// origin: Section2,
				// destination: Section2,
				// direction: string,
				// trigger: string,
				// Callback fired once the sections have been loaded, after the scrolling has ended.

				current_section_index = destination.index;

				play_animation = true;
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
			loadJSON(`${base}/idle.json`),
			loadJSON(`${base}/happy.json`),
			loadJSON(`${base}/thankful.json`),
			loadJSON(`${base}/clapping.json`),
			loadJSON(`${base}/greeting.json`),
		]).then(([eva, idle, happy, thankful, clapping, greeting]) => {
			threeScene.scene.add(eva);

			const idle_clip = THREE.AnimationClip.parse(idle);
			const happy_clip = THREE.AnimationClip.parse(happy);
			const thankful_clip = THREE.AnimationClip.parse(thankful);
			const clapping_clip = THREE.AnimationClip.parse(clapping);
			const greeting_clip = THREE.AnimationClip.parse(greeting);

			animation_mapping.push(happy_clip);
			animation_mapping.push(thankful_clip);
			animation_mapping.push(clapping_clip);
			animation_mapping.push(greeting_clip);
			animation_mapping.push(idle_clip);

			mixer = new THREE.AnimationMixer(eva);

			mixer.addEventListener("finished", onAnimationFinished);

			action = mixer.clipAction(idle_clip);

			action.reset();

			// Default is THREE.LoopRepeat (with an infinite number of repetitions)
			action.setLoop(THREE.LoopRepeat, Infinity);

			// keep model at the position where it stops
			action.clampWhenFinished = true;

			action.enabled = true;

			action.fadeIn(0.3);

			action.play();
		});

		animate();
	});

	$effect(() => {
		if (play_animation) {
			// play animation
			// mixer.stopAllAction();

			const clip = animation_mapping[current_section_index];

			if (mixer && clip instanceof THREE.AnimationClip) {
				if (action && action.isRunning()) {
					action.fadeOut(0.2);
				}

				if (new_action && new_action.isRunning()) {
					new_action.fadeOut(0.2);
				}

				new_action = mixer.clipAction(clip);

				new_action.reset();

				// Default is THREE.LoopRepeat (with an infinite number of repetitions)
				new_action.setLoop(THREE.LoopOnce, 1);

				// keep model at the position where it stops
				new_action.clampWhenFinished = true;

				new_action.enabled = true;

				new_action.fadeIn(0.3);

				new_action.play();
			}

			play_animation = false;
		}

		return () => {
			// if a teardown function is provided, it will run
			// a) immediately before the effect re-runs
			// b) when the component is destroyed
			console.log("effect teardown function after fire animation play");
		};
	});

	onDestroy(() => {
		if (browser) {
			cancelAnimationFrame(animation_pointer);

			if (mixer) {
				mixer.stopAllAction();

				mixer.removeEventListener("finished", onAnimationFinished);
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
