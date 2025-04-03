<script lang="ts"></script>

<div>
	<div class="top-bar">
		<div class="title">Brighton AI Robotics (AIR) Force Projects</div>
		<div class="nav button-64"><a href="#projects">Projects</a></div>
		<div class="nav button-64"><a href="#team">Team</a></div>
		<div class="nav button-64"><a href="#joinus">Join Us</a></div>
	</div>
</div>

<style lang="scss">
	@use "../assets/global";

	// .button-64 {
	// 	align-items: center;
	// 	background-image: linear-gradient(
	// 		144deg,
	// 		#af40ff,
	// 		#5b42f3 50%,
	// 		#00ddeb
	// 	);
	// 	border: 0;
	// 	border-radius: 8px;
	// 	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
	// 	box-sizing: border-box;
	// 	color: #ffffff;
	// 	display: flex;
	// 	font-family: Phantomsans, sans-serif;
	// 	font-size: 20px;
	// 	justify-content: center;
	// 	line-height: 1em;
	// 	max-width: 100%;
	// 	min-width: 140px;
	// 	padding: 3px;
	// 	text-decoration: none;
	// 	user-select: none;
	// 	-webkit-user-select: none;
	// 	touch-action: manipulation;
	// 	white-space: nowrap;
	// 	cursor: pointer;
	// }

	// .button-64:active,
	// .button-64:hover {
	// 	outline: 0;
	// }

	// .button-64 span {
	// 	background-color: rgb(5, 6, 45);
	// 	padding: 16px 24px;
	// 	border-radius: 6px;
	// 	width: 100%;
	// 	height: 100%;
	// 	transition: 300ms;
	// }

	// .button-64:hover span {
	// 	background: none;
	// }

	// $font-white: #fff;
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
			// border-right: 1px solid $font-white;
			&:last-child {
				border-right: none;
			}
		}
	}
</style>
