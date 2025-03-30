<script lang="ts"></script>

<div>
	<div class="top-bar">
		<div class="title">Brighton AI Robotics (AIR) Force Projects</div>
		<div class="nav">Projects</div>
		<div class="nav">Team</div>
		<div class="nav">Join Us</div>
	</div>
</div>

<style lang="scss">
	$font-white: #fff;
	.top-bar {
		display: flex;
		flex-direction: row;
		height: 40px;
		align-items: center;
		justify-content: flex-start;

		.title {
			font-size: 24px;
			margin-right: 48px;
		}

		.nav {
			text-transform: uppercase;
			font-size: 18px;
			margin-top: 4px;
			margin-right: 18px;
			padding-right: 18px;
			letter-spacing: 4px;
			border-right: 1px solid $font-white;
			&:last-child {
				border-right: none;
			}
		}
	}
</style>
