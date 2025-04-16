<script lang="ts"></script>

<div class="projects">
	<div class="l">
		<div class="desc">
			<i> Advancing closer to the future of intelligent systems.</i>
		</div>
	</div>
	<div class="project-list">
		<div class="item">Multi-modal Control for Robotic Devices.</div>
		<div class="item">Central Artificial Intelligence</div>
	</div>
</div>

<style lang="scss">
	@use "../assets/global";

	.projects {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: global.$margin-1 * 2 global.$margin-1 0 global.$margin-1 * 3;

		.l {
			width: calc(40vw - global.$margin-1);

			.title {
				font-size: global.$title-font-size;
				margin-bottom: 8px;
			}

			.desc {
				font-size: 20px;
			}
		}

		.project-list {
			display: flex;
			flex-direction: row;
			flex: 1 1 auto;
			padding: 0 global.$margin-1;

			.item {
				margin-right: 8px;
				background-color: global.$button-background;
				width: 360px;
				height: global.$top-bar-height;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 16px;
				clip-path: polygon(0 0, 95% 0, 100% 30%, 100% 100%, 0 100%);

				&:last-child {
					margin-right: 0px;
				}
			}
		}
	}
</style>
