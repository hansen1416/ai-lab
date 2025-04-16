<script lang="ts">
	import { base } from "$app/paths";
	import { browser } from "$app/environment";
	import * as THREE from "three";
	import { onMount, onDestroy } from "svelte";
	import ThreeScene from "../lib/ThreeScene";
	import {
		loadFbx,
		loadJSON,
		play_action,
		visibleWidthAtZDepth,
	} from "../lib/ropes";
	import Loader from "../components/loader.svelte";
	import Introduction from "../components/introduction.svelte";
	import Projects from "../components/projects.svelte";
	import Team from "../components/team.svelte";
	import Joinus from "../components/joinus.svelte";
	import "fullpage.js/dist/fullpage.css";

	let loading = $state(true);

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

	let idle_action: THREE.AnimationAction | undefined = undefined;

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

		if (new_action) {
			new_action.fadeOut(0.2);
		}

		if (idle_action) {
			play_action(idle_action);
		}
	}

	onMount(async () => {
		/** @ts-ignore */
		const fullpage = (await import("fullpage.js")).default;

		new fullpage("#fullpage", {
			// licenseKey: "YOUR_KEY_HERE",
			anchors: ["introduction", "projects", "team", "joinus"],
			autoScrolling: true,
			scrollBar: false,
			scrollOverflow: false,
			loopTop: false,
			loopBottom: false,
			navigation: true,
			navigationPosition: "right",
			beforeLeave: () => {
				// fired right before leaving the section, just before the transition takes place.
				// cancel the scroll by returning false.
				time_elapsed = performance.now();

				return true;
			},
			afterLoad: (_: Section2, destination: Section2) => {
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

		const visible_width = visibleWidthAtZDepth(0, threeScene.camera);

		const initial_x = visible_width * 0.118;

		Promise.all([
			loadFbx(
				`${base}/character3967ecff-8E949CFF.fbx`,
				"eva",
				new THREE.Vector3(initial_x, -120, 0),
				new THREE.Euler(0, -0.5, 0),
			),
			loadJSON(`${base}/idle.json`),
			loadJSON(`${base}/happy.json`),
			loadJSON(`${base}/thankful.json`),
			loadJSON(`${base}/clapping.json`),
			loadJSON(`${base}/greeting.json`),
			new Promise((resolve) =>
				setTimeout(
					resolve,
					process.env.NODE_ENV === "production" ? 1500 : 100,
				),
			) /** minimum loading time */,
		])
			.then(([eva, idle, happy, thankful, clapping, greeting]) => {
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

				mixer = new THREE.AnimationMixer(eva);

				mixer.addEventListener("finished", onAnimationFinished);

				idle_action = mixer.clipAction(idle_clip);

				play_action(idle_action);

				loading = false;
			})
			.finally(() => {
				// remove loading screen
				// loading = false;
			});

		animate();
	});

	$effect(() => {
		if (!play_animation) {
			return;
		}

		if (idle_action && idle_action.isRunning()) {
			idle_action.fadeOut(0.2);
		}

		if (new_action && new_action.isRunning()) {
			new_action.fadeOut(0.2);
		}

		const clip = animation_mapping[current_section_index];

		if (mixer && clip instanceof THREE.AnimationClip) {
			new_action = mixer.clipAction(clip);

			play_action(new_action, THREE.LoopOnce, 1);
		}

		play_animation = false;
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

<div
	class="overall-bg"
	style="background-image: url({base}/images/bg.png);"
></div>

<div class="canvas-box">
	<canvas bind:this={canvas}></canvas>
</div>

<div id="fullpage">
	<div class="section"><Introduction /></div>
	<div class="section"><Projects /></div>
	<div class="section"><Team /></div>
	<div class="section"><Joinus /></div>
</div>

<div class="top-bar">
	<div class="logo">Brighton AI Robotics (AIR) Force Projects</div>

	<div class="navs">
		<div class="nav"><a href="#introduction">Intro</a></div>
		<div class="nav"><a href="#projects">Projects</a></div>
		<div class="nav"><a href="#team">Team</a></div>
		<div class="nav"><a href="#joinus">Join Us</a></div>
	</div>
</div>

{#if loading}
	<Loader />
{/if}

<style lang="scss">
	@use "../assets/global";

	:global {
		#fp-nav.fp-right {
			right: 36px;
			ul {
				li {
					width: 36px;
					height: 36px;
					margin: 18px;
					a {
						span {
							background: white;
						}
					}
				}
			}
		}

		.fp-slidesNav {
			right: 36px;
			ul {
				li {
					width: 20px;
					height: 20px;
					margin: 12px;
					a {
						span {
							background: white;
						}
					}
				}
			}
		}
	}

	.overall-bg {
		// background: radial-gradient(
		// 	ellipse at 70% 50%,
		// 	#392256 0%,
		// 	#210f37 40%,
		// 	#040126 100%
		// );
		min-height: 100vh;
		width: 100%;
		margin: 0;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -99;
		// strech the background image to cover the whole screen
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

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

		.section {
			height: 100vh;
			box-sizing: border-box;
			display: flex;
			position: relative;
			color: global.$font-white;
			background-color: transparent;
			padding: global.$margin-1;
			overflow: hidden;
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

	.top-bar {
		position: fixed;
		top: global.$margin-1;
		left: 0;
		width: 100%;
		flex-direction: row;
		height: global.$top-bar-height;
		color: global.$font-white;
		padding: 0 global.$margin-1 * 2;
		box-sizing: border-box;

		@include global.flex-between;

		.logo {
			font-size: 32px;
			font-weight: bold;
		}

		.navs {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			.nav {
				text-transform: uppercase;
				font-size: 24px;
				font-weight: bold;
				margin-right: global.$margin-1;
				letter-spacing: 4px;
				width: 120px;
				height: global.$top-bar-height;

				@include global.flex-center;

				a {
					color: inherit;

					@include global.link;
				}
			}
		}
	}
</style>
