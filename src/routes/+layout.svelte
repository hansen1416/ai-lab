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
			font-family: "Gidole", sans-serif;
			font-weight: 400;
			font-style: normal;
		}

		p {
			margin: 0;
			margin-bottom: 1em;
		}
	}
</style>
