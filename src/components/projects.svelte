<script lang="ts">
	let tab = $state(1);
</script>

<div class="projects">
	<div class="desc">
		<i> Advancing closer to the future of intelligent systems.</i>
	</div>

	<div class="project-list">
		<div class="tabs">
			<div class="tab active" class:active={tab === 1}>
				<button
					class="tab"
					onclick={() => {
						tab = 1;
					}}
				>
					Multi-modal Control for Robotic Devices.
				</button>
			</div>
			<div class="tab" class:active={tab === 2}>
				<button
					class="tab"
					onclick={() => {
						tab = 2;
					}}
				>
					Central Artificial Intelligence</button
				>
			</div>
		</div>
		<div class="tab-content" class:active={tab === 1}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
				eos tempore voluptatum quisquam saepe sed pariatur enim
				quibusdam asperiores tempora earum quis aliquid repudiandae
				dolores quaerat voluptate fugiat harum doloremque.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
				eos tempore voluptatum quisquam saepe sed pariatur enim
				quibusdam asperiores tempora earum quis aliquid repudiandae
				dolores quaerat voluptate fugiat harum doloremque.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
				eos tempore voluptatum quisquam saepe sed pariatur enim
				quibusdam asperiores tempora earum quis aliquid repudiandae
				dolores quaerat voluptate fugiat harum doloremque.
			</p>
		</div>
		<div class="tab-content" class:active={tab === 2}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
				eos tempore voluptatum quisquam saepe sed pariatur enim
				quibusdam asperiores tempora earum quis aliquid repudiandae
				dolores quaerat voluptate fugiat harum doloremque.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
				eos tempore voluptatum quisquam saepe sed pariatur enim
				quibusdam asperiores tempora earum quis aliquid repudiandae
				dolores quaerat voluptate fugiat harum doloremque.
			</p>
		</div>
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
		padding: global.$margin-1 * 2 global.$margin-1 0 global.$margin-1 * 7/3;

		.title {
			font-size: global.$title-font-size;
			margin-bottom: 8px;
		}

		.desc {
			font-size: 20px;
			padding: 0 0 global.$margin-1 0;
		}

		.project-list {
			display: flex;
			flex-direction: column;
			flex: 1 1 auto;

			// .tab {
			// 	margin-right: 8px;
			// 	background-color: global.$button-background;
			// 	width: 360px;
			// 	height: global.$top-bar-height;
			// 	display: flex;
			// 	align-items: center;
			// 	justify-content: center;
			// 	font-size: 24px;
			// 	clip-path: polygon(0 0, 95% 0, 100% 30%, 100% 100%, 0 100%);
			// }

			.tabs {
				display: flex;
				flex-direction: row;

				.tab {
					padding: 10px 20px;
					margin-right: 5px;
					border-radius: 5px 5px 0 0;
					font-size: 24px;
					background-color: global.$button-background;
					clip-path: polygon(0 0, 95% 0, 100% 30%, 100% 100%, 0 100%);

					@include global.flex-center;

					button {
						background: none;
						border: none;
						color: inherit;
						width: 100%;
						height: 100%;
						cursor: pointer;
					}
				}
				.tab.active {
					// border-bottom: 2px solid #1954ec;

					background: linear-gradient(
						90deg,
						rgba(199, 172, 255, 0.6),
						rgba(255, 255, 255, 0.6)
					);
				}
			}

			.tab-content {
				display: none;
				padding: global.$margin-1 0 0 0;
				flex: 1 1 auto;
				width: 90%;
				font-size: 24px;

				@include global.galssblur(2px);
			}
			.tab-content.active {
				display: block;
			}
		}
	}
</style>
