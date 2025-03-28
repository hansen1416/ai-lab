<script lang="ts">
	import { base } from "$app/paths";
	import { browser } from "$app/environment";
	import * as THREE from "three";
	import { onMount, onDestroy } from "svelte";
	import ThreeScene from "../lib/ThreeScene";
	import { loadFbx, loadJSON } from "../lib/ropes";
	// import fullpage from "fullpage.js";

	let threeScene: ThreeScene;

	let canvas: HTMLCanvasElement;

	let animation_pointer = 0;

	let mixer: THREE.AnimationMixer | undefined = undefined;

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
		});

		threeScene = new ThreeScene(
			canvas,
			document.documentElement.clientWidth,
			document.documentElement.clientHeight,
		);

		Promise.all([
			loadFbx(
				// "/character3967ecff-8E949CFF.fbx",
				"Standing Greeting.fbx",
				"eva",
				new THREE.Vector3(50, -120, 0),
				new THREE.Euler(0, -0.5, 0),
			),
			loadJSON("/thankful.json"),
			loadJSON("/greeting.json"),
		]).then(([eva, thankful, greeting]) => {
			threeScene.scene.add(eva);

			const thankful_clip = THREE.AnimationClip.parse(thankful);
			const greeting_clip = THREE.AnimationClip.parse(greeting);

			mixer = new THREE.AnimationMixer(eva);
			const action = mixer.clipAction(greeting_clip);
			action.play();
		});

		// loadFbx(
		// 	"/character3967ecff-8E949CFF.fbx",
		// 	// "Thankful.fbx",
		// 	"eva",
		// 	new THREE.Vector3(50, -120, 0),
		// 	new THREE.Euler(0, -0.5, 0),
		// ).then((eva: THREE.Group) => {
		// 	threeScene.scene.add(eva);

		// 	const mixer = new THREE.AnimationMixer(eva);
		// 	const action = mixer.clipAction(clip);
		// });

		// we need store, effect maybe

		// we need store to monitor the object status
		// const object = threeScene.scene.getObjectByName("eva");

		animate();
	});

	onDestroy(() => {
		if (browser) {
			cancelAnimationFrame(animation_pointer);

			threeScene.dispose();
		}
	});
</script>

<!-- <a href="{base}/">Home5</a> -->

<div class="canvas-box">
	<canvas bind:this={canvas}></canvas>
</div>

<div id="fullpage">
	<div class="section">Some section1</div>
	<div class="section">Some section2</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
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
			align-items: center;
			justify-content: center;
			font-size: 2rem;
			color: $font-white;
			background-color: transparent;
		}
	}
</style>
