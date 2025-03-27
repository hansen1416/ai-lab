<script lang="ts">
	import { base } from "$app/paths";
	import { browser } from "$app/environment";
	import * as THREE from "three";
	import { onMount, onDestroy } from "svelte";
	import ThreeScene from "../lib/ThreeScene";
	// import fullpage from "fullpage.js";

	let threeScene: ThreeScene;

	let canvas: HTMLCanvasElement;

	let animation_pointer = 0;

	const clock = new THREE.Clock();

	function animate() {
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

		threeScene.loadFbx("/character.fbx", "eva");

		// we need store to monitor the object status
		setTimeout(() => {
			const object = threeScene.scene.getObjectByName("eva");

			object?.position.set(0, -100, 0);

			console.log(object);
		}, 1000);

		animate();
	});

	onDestroy(() => {
		if (browser) {
			cancelAnimationFrame(animation_pointer);

			threeScene.dispose();
		}
	});
</script>

<!-- <nav>
	<a href="{base}/">Home5</a>
</nav> -->

<div>
	<canvas bind:this={canvas}></canvas>
</div>

<div id="fullpage">
	<div class="section">Some section1</div>
	<div class="section">Some section2</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>

<style lang="scss">
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -9;
	}

	.section {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		color: white;
	}
</style>
