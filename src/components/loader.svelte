<script lang="ts"></script>

<div class="loading-box"><span class="loader"></span></div>

<style lang="scss">
	@use "../assets/global";

	.loading-box {
		position: absolute;
		display: flex;
		width: 100svw;
		height: 100svh;
		z-index: 9999;
		top: 0;
		left: 0;
		justify-content: center;
		align-items: center;
		background: radial-gradient(#210f37 0%, #040126 100%);
		overflow: hidden;
	}

	$size: 80px;

	/* HTML: <div class="loader"></div> */
	.loader {
		width: $size;
		height: calc($size / 2);
		background: #3967ec;
		position: relative;
		animation: l9-0 1.5s infinite linear;
	}
	.loader:before,
	.loader:after {
		content: "";
		position: absolute;
		background: inherit;
		bottom: 100%;
		width: 50%;
		height: 100%;
		animation: inherit;
		animation-name: l9-1;
	}
	.loader:before {
		left: 0;
		transform-origin: bottom left;
		--s: -1;
	}
	.loader:after {
		right: 0;
		transform-origin: bottom right;
	}
	@keyframes l9-0 {
		0%,
		10% {
			transform: translateY(0%) scaleY(1);
		}
		49.99% {
			transform: translateY(-50%) scaleY(1);
		}
		50% {
			transform: translateY(-50%) scaleY(-1);
		}
		90%,
		100% {
			transform: translateY(-100%) scaleY(-1);
		}
	}
	@keyframes l9-1 {
		10%,
		90% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(calc(var(--s, 1) * 180deg));
		}
	}
</style>
