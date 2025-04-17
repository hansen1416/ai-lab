<script lang="ts">
	let { tabs, ...contents } = $props();

	let tab = $state(0);

	const content_keys = Object.keys(contents);

	const content_array = content_keys.map((key) => {
		return contents[key];
	});
</script>

<div class="tabs">
	{#each tabs as name, index}
		<div class="tab active" class:active={tab === index}>
			<button
				class="tab"
				onclick={() => {
					tab = index;
				}}
			>
				{name}
			</button>
		</div>
	{/each}
</div>

{#each content_array as content_snippet, index}
	<div class="tab-content" class:active={tab === index}>
		{@render content_snippet()}
	</div>
{/each}

<style lang="scss">
	@use "../assets/global";

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
</style>
