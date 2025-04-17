<script lang="ts">
	import Tabs from "./tabs.svelte";

	const projects = [
		"Multi-modal Control for Robotic Devices",
		"Central Artificial Intelligence",
	];
</script>

{#snippet content1()}
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
		tempore voluptatum quisquam saepe sed pariatur enim quibusdam asperiores
		tempora earum quis aliquid repudiandae dolores quaerat voluptate fugiat
		harum doloremque."
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
		tempore voluptatum quisquam saepe sed pariatur enim quibusdam asperiores
		tempora earum quis aliquid repudiandae dolores quaerat voluptate fugiat
		harum doloremque."
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
		tempore voluptatum quisquam saepe sed pariatur enim quibusdam asperiores
		tempora earum quis aliquid repudiandae dolores quaerat voluptate fugiat
		harum doloremque."
	</p>
{/snippet}

{#snippet content2()}
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
		tempore voluptatum quisquam saepe sed pariatur enim quibusdam asperiores
		tempora earum quis aliquid repudiandae dolores quaerat voluptate fugiat
		harum doloremque."
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
		tempore voluptatum quisquam saepe sed pariatur enim quibusdam asperiores
		tempora earum quis aliquid repudiandae dolores quaerat voluptate fugiat
		harum doloremque."
	</p>
{/snippet}

<div class="projects">
	<div class="desc">
		<i> Advancing closer to the future of intelligent systems.</i>
	</div>

	<div class="project-list">
		<Tabs tabs={projects} {content1} {content2} />
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

		.desc {
			font-size: 20px;
			padding: 0 0 global.$margin-1 0;
		}

		.project-list {
			display: flex;
			flex-direction: column;
			flex: 1 1 auto;
		}
	}
</style>
