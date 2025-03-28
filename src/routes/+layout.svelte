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
		}
	}
</style>
