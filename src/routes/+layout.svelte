<script>
	let { children } = $props();
</script>

{@render children()}

<style lang="scss">
	:global {
		html {
			margin: 0;
			pad: 0;
		}
		body {
			margin: 0;
			pad: 0;
			font-family: "Times New Roman", Times, serif;
			font-weight: 400;
			font-style: normal;
		}

		p {
			margin: 0;
			margin-bottom: 1em;

			&:last-child {
				margin-bottom: 0;
			}
		}

		button {
			border: none;
			background: none;
			outline: none;
			cursor: pointer;
			padding: 0;
			margin: 0;
			color: inherit;
			text-align: inherit;
		}
	}
</style>
