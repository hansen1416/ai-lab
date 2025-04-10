<script lang="ts"></script>

<div class="intro">
	<div class="top-bar">
		<div class="nav"><a href="#projects">Projects</a></div>
		<div class="nav"><a href="#team">Team</a></div>
		<div class="nav"><a href="#joinus">Join Us</a></div>
	</div>
	<div class="desc">
		<div class="desc-inner">
			<div class="title">Brighton AI Robotics (AIR) Force Projects</div>
			<div class="content">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Corrupti officiis exercitationem sapiente labore
					praesentium, omnis porro tempore tenetur placeat veniam
					soluta itaque magnam. Voluptatum nihil quam dolor, quod esse
					dolores.
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use "../assets/global";

	.intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;

		.top-bar {
			width: 100%;
			display: flex;
			flex-direction: row;
			height: global.$top-bar-height;
			align-items: center;
			justify-content: flex-start;
			margin-bottom: global.$margin-1;

			.nav {
				text-transform: uppercase;
				font-size: 18px;
				margin-right: 36px;
				letter-spacing: 4px;
				width: 180px;
				height: global.$top-bar-height;
				color: global.$font-white;

				@include global.button-top;

				&:last-child {
					border-right: none;
				}

				a {
					@include global.button-bottom;
				}
			}
		}

		.desc {
			width: 100%;
			min-height: 0;
			flex: 1 1 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.desc-inner {
				width: 80%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: global.$margin-1;

				@include global.glassmorphism;

				.title {
					$font-size: 64px;
					line-height: $font-size;
					font-size: $font-size;
					margin-bottom: $font-size;
					text-align: center;
				}

				.content {
					box-sizing: border-box;
					font-size: 20px;
					line-height: 30px;
					text-align: center;
					width: 60%;
				}
			}
		}
	}
</style>
