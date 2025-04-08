<script>
	let { children } = $props();
</script>

{@render children()}

<style>
	@import "tailwindcss";

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

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
