<script lang="ts">
	import { base } from "$app/paths";
	import * as THREE from "three";
	import { onMount } from "svelte";
	// import fullpage from "fullpage.js";

	onMount(async () => {
		/** @ts-ignore */
		const fullpage = (await import("fullpage.js")).default;

		new fullpage("#fullpage", {
			autoScrolling: true,
			loopTop: true,
			loopBottom: true,
		});
	});
</script>

<!-- <nav>
	<a href="{base}/">Home5</a>
</nav> -->

<div id="fullpage">
	<div class="section">Some section1</div>
	<div class="section">Some section2</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>

<style lang="scss">
	// $primary: #333;
	// h1 {
	//   color: $primary;
	// }

	.section {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		color: white;
	}
	.section:nth-child(1) {
		background: #1abc9c;
	}
	.section:nth-child(2) {
		background: #3498db;
	}
	.section:nth-child(3) {
		background: #9b59b6;
	}
	.section:nth-child(4) {
		background: #e67e22;
	}
</style>
