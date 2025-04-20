<script lang="ts">
	import { base } from "$app/paths";
</script>

<div class="joinus">
	<div class="upper">
		<div class="study">
			<div>
				<span>Study for your PhD</span>
				<p>
					We welcome any applications related to Robotics and/or AI.
					You can find out more at UoB Computing PhD.
				</p>
			</div>
			<div>
				<span>Work with our team</span>
				<p>
					We are always looking to create new networks and support
					academic and industrial collaborations.
				</p>
			</div>
		</div>

		<div class="contact">
			<span>Contact Us</span>
			<p>
				University of Brighton Advanced Engineering Building Brighton
				United Kingdom BN2 4AT Please contact Almas
				[https://research.brighton.ac.uk/en/persons/almas-baimagambetov]
				for any queries related to the Robotics AI Lab.
			</p>
		</div>
	</div>

	<div class="footer">
		<div class="copyright">Copyright © UoB RAI Lab 2025</div>
		<div class="privacy">
			<a href="{base}/privacy">Privacy Policy</a>
		</div>
	</div>
</div>

<style lang="scss">
	@use "../assets/global";

	.joinus {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: calc(global.$margin-1 * 2) calc(global.$margin-1 * 2)
			calc(global.$margin-1) calc(global.$margin-1 * 7 / 3);

		.upper {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;
			width: 100%;
			flex-grow: 1;
			.study {
				flex: 1 1 auto;
				margin-right: global.$robot-margin;

				@include global.glassblur(2px);
			}
			.contact {
				width: 400px;
				flex-grow: 0;
			}
		}
		.footer {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.copyright {
				margin-right: global.$margin-1;
			}

			.privacy {
				a {
					@include global.link;
				}
			}
		}
	}
</style>
