<script lang="ts">
	const projects = [
		{
			title: "Multi-modal Control for Robotic Devices",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos tempore voluptatum quisquam saepe sed pariatur enim quibusdam asperiores tempora earum quis aliquid repudiandae dolores quaerat voluptate fugiat harum doloremque.",
			content: content1,
		},
		{
			title: "Central Artificial Intelligence",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos tempore voluptatum quisquam saepe sed pariatur enim quibusdam asperiores tempora earum quis aliquid repudiandae dolores quaerat voluptate fugiat harum doloremque.",
			content: content2,
		},
	];

	let active_project_index = $state(0);
</script>

{#snippet content1()}
	<div class="project-detail">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
			tempore voluptatum quisquam saepe sed pariatur enim quibusdam
			asperiores tempora earum quis aliquid repudiandae dolores quaerat
			voluptate fugiat harum doloremque.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
			tempore voluptatum quisquam saepe sed pariatur enim quibusdam
			asperiores tempora earum quis aliquid repudiandae dolores quaerat
			voluptate fugiat harum doloremque.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
			tempore voluptatum quisquam saepe sed pariatur enim quibusdam
			asperiores tempora earum quis aliquid repudiandae dolores quaerat
			voluptate fugiat harum doloremque.
		</p>
	</div>
{/snippet}

{#snippet content2()}
	<div class="project-detail">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
			tempore voluptatum quisquam saepe sed pariatur enim quibusdam
			asperiores tempora earum quis aliquid repudiandae dolores quaerat
			voluptate fugiat harum doloremque.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
			tempore voluptatum quisquam saepe sed pariatur enim quibusdam
			asperiores tempora earum quis aliquid repudiandae dolores quaerat
			voluptate fugiat harum doloremque.
		</p>
	</div>
{/snippet}

<div class="projects">
	<!-- <div class="desc">
		<i> Advancing closer to the future of intelligent systems.</i>
	</div> -->

	<div class="project-detail">
		<div class="title">{projects[0].title}</div>
		<div class="detail">
			{@render projects[active_project_index].content()}
		</div>
	</div>

	<div class="project-list">
		{#each projects as project, i}
			<div class="project-item" class:active={active_project_index === i}>
				<button
					onclick={() => {
						active_project_index = i;
					}}
				>
					<div class="title">
						<div
							class="bullet"
							class:hidden={active_project_index === i}
						></div>
						<h2>{project.title}</h2>
					</div>

					<p class:hidden={active_project_index !== i}>
						{project.desc}
					</p>
				</button>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@use "../assets/global";

	.projects {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: global.$margin-1 * 2 global.$margin-1 0
			calc(global.$margin-1 * 7 / 3);

		.project-list {
			width: 480px;
			margin-right: global.$margin-1;
			flex-shrink: 0;

			.project-item {
				box-sizing: border-box;
				margin-bottom: global.$margin-1/2;

				@include global.galssblur(2px);

				&.active {
					padding: global.$margin-1 / 2;
					background: linear-gradient(
						140deg,
						rgba(255, 255, 255, 0.8),
						rgba(199, 172, 255, 0.8)
					);
					clip-path: polygon(
						0 0,
						100% 0,
						100% 90%,
						96% 100%,
						0% 100%
					);
				}

				&:not(.active) {
				}

				.title {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-start;
					.bullet {
						width: 12px;
						height: 12px;
						border-radius: 50%;
						background-color: global.$font-white;
						margin-right: global.$margin-1/2;
					}

					h2 {
						@include global.operation-font;

						font-size: 22px;
					}
				}
				p {
					font-size: 16px;
				}
			}
		}

		.project-detail {
			flex: 1 1 auto;
			height: 100%;
			margin-right: 200px;
			box-sizing: border-box;

			.title {
				@include global.operation-font;

				font-size: 32px;
				margin-bottom: global.$margin-1;
			}

			.detail {
				@include global.galssblur(2px);
			}
		}
	}
</style>
