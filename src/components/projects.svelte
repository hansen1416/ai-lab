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
			{@render projects[0].content()}
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
					<h2>{project.title}</h2>
					<p>{project.desc}</p>
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
			width: 560px;
			.project-item {
			}
		}

		.project-detail {
			width: 86%;
			height: 100%;
		}
	}
</style>
