<script lang="ts">
	import { base } from "$app/paths";
</script>

<div class="intro">
	<!-- <div class="top-bar">
		<div class="nav"><a href="#projects">Projects</a></div>
		<div class="nav"><a href="#team">Team</a></div>
		<div class="nav"><a href="#joinus">Join Us</a></div>
	</div> -->
	<div class="desc">
		<div
			class="desc-inner"
			style="background-image: url({base}/images/intro-background.png);"
		>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
			officiis exercitationem sapiente labore praesentium, omnis porro
			tempore tenetur placeat veniam soluta itaque magnam.
		</div>
	</div>
</div>

<style lang="scss">
	@use "../assets/global";

	.intro {
		width: 100%;
		height: 100%;

		@include global.flex-center;

		// .top-bar {
		// 	width: 100%;
		// 	display: flex;
		// 	flex-direction: row;
		// 	height: global.$top-bar-height;
		// 	align-items: center;
		// 	justify-content: flex-start;
		// 	margin-bottom: global.$margin-1;

		// 	.nav {
		// 		text-transform: uppercase;
		// 		font-size: 18px;
		// 		margin-right: 36px;
		// 		letter-spacing: 4px;
		// 		width: 180px;
		// 		height: global.$top-bar-height;
		// 		color: global.$font-white;

		// 		@include global.button-top;

		// 		&:last-child {
		// 			border-right: none;
		// 		}

		// 		a {
		// 			@include global.button-bottom;
		// 		}
		// 	}
		// }

		.desc {
			width: 100%;
			min-height: 0;
			flex: 1 1 auto;
			@include global.flex-center;

			.desc-inner {
				width: 58%;
				margin-left: -12%;
				color: global.$font-white;
				font-size: 56px;

				will-change: transform;
				background-color: #fff;
				background-repeat: no-repeat;
				-webkit-text-fill-color: transparent;
				-webkit-background-clip: text;
				background-clip: text;

				@include global.flex-center;
				@include global.conten-font;
			}
		}
	}
</style>
