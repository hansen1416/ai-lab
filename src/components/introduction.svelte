<script lang="ts"></script>

<div class="intro">
	<div class="top-bar">
		<div class="nav"><a href="#projects">Projects</a></div>
		<div class="nav"><a href="#team">Team</a></div>
		<div class="nav"><a href="#joinus">Join Us</a></div>
	</div>
	<div class="description">
		<div class="title">Brighton AI Robotics (AIR) Force Projects</div>
		<div class="content">
			<p>Where code meets cognition and machines learn to move.</p>

			<p>
				The AI & Robotics Lab at the University of Brighton is a
				cutting-edge research space where artificial intelligence,
				machine learning, and robotics converge. Focused on real-world
				impact, the lab develops intelligent systems capable of
				perception, decision-making, and autonomous behavior. From
				humanoid robots to swarm robotics, the lab empowers innovation
				in healthcare, manufacturing, and creative industries.
			</p>

			<p>
				Equipped with state-of-the-art tools, including robotic arms,
				mobile robots, simulation platforms, and deep learning
				infrastructure, it serves as a launchpad for pioneering research
				and student-led breakthroughs.
			</p>

			<p>
				Here, machines think, adapt, and evolve. The future is built—not
				imagined.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@use "../assets/global";

	.intro {
		display: flex;
		flex-direction: column;
		width: calc(60vw - 40px);
		height: 100%;
	}

	$top-bar-height: 60px;

	.top-bar {
		display: flex;
		flex-direction: row;
		height: $top-bar-height;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: global.$magin-1;

		.nav {
			text-transform: uppercase;
			font-size: 18px;
			margin-right: 36px;
			letter-spacing: 4px;
			width: 180px;
			height: $top-bar-height;

			@include global.button-top;

			&:last-child {
				border-right: none;
			}

			a {
				@include global.button-bottom;

				background-color: #433581;
			}
		}
	}

	.description {
		width: 100%;
		height: 100%;
		margin: global.$magin-1;
		box-sizing: border-box;

		.title {
			font-size: 24px;
			margin-bottom: global.$magin-1;
		}

		.content {
			display: flex;
			flex-direction: column;
			width: 60%;
			font-size: 20px;
		}
	}
</style>
