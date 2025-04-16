<script lang="ts">
	import { base } from "$app/paths";
</script>

<div class="joinus">
	<div class="title">Study or Work With Us</div>
	<div>
		<div>
			<span>Study for your PhD</span>
			<p>
				We welcome any applications related to Robotics and/or AI. You
				can find out more at UoB Computing PhD.
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

	<div>
		<div>
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
		<div>Copyright © UoB RAI Lab 2025</div>
		<div>
			<a href="{base}/privacy">Privacy Policy</a>
		</div>
	</div>
</div>

<style lang="scss">
	@use "../assets/global";

	.joinus {
		.title {
			font-size: global.$title-font-size;
		}
	}
</style>
