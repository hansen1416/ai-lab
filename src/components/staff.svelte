<script lang="ts">
	import { base } from "$app/paths";
	import Tabs from "./tabs.svelte";

	const tabs = ["Staff", "Students"];

	const STAFF = [
		{
			name: "Almas Baim",
			role: "Lead Software Architect, Co-Founder",
			image: `${base}/images/team/ab.png`,
			social: [
				{
					url: "https://research.brighton.ac.uk/en/persons/almas-baimagambetov",
					icon: "fas fa-user-circle",
				},
				{
					url: "https://github.com/AlmasB/",
					icon: "fab fa-github",
				},
				{
					url: "https://www.youtube.com/@AlmasB0",
					icon: "fab fa-youtube",
				},
			],
		},
		{
			name: "Khizer Saeed",
			role: "Engineering Lead, Co-Founder",
			image: `${base}/images/placeholder.jpg`,
			social: [
				{
					url: "https://research.brighton.ac.uk/en/persons/khizer-saeed",
					icon: "fas fa-user-circle",
				},
			],
		},
		{
			name: "Shanay Rab",
			role: "Metrology, Machine Design, Automation, and Robotics.",
			image: `${base}/images/team/sr.png`,
			social: [
				{
					url: "https://research.brighton.ac.uk/en/persons/shanay-rab",
					icon: "fas fa-user-circle",
				},
			],
		},
	];

	const STUDENTS = [
		{
			name: "Sajjad Hussain",
			project: "Multi-modal Robotics Control",
			image: `${base}/images/team/sh.png`,
			social: [
				{
					url: "https://linkedin.com",
					icon: "fab fa-linkedin-in",
				},
			],
		},
		{
			name: "Ola Ezekiel",
			project: "Emotion Recognition and Analysis",
			image: `${base}/images/team/ote.png`,
			social: [
				{
					url: "https://linkedin.com",
					icon: "fab fa-linkedin-in",
				},
			],
		},
		{
			name: "Awes Mubarak",
			project: "Determinism in Large Language Models",
			image: `${base}/images/team/am.png`,
			social: [
				{
					url: "https://linkedin.com",
					icon: "fab fa-linkedin-in",
				},
			],
		},
		{
			name: "Hansen Han",
			project: "Text-conditioned Human Motion Generation",
			image: `${base}/images/team/hh.png`,
			social: [
				{
					url: "https://linkedin.com",
					icon: "fab fa-linkedin-in",
				},
			],
		},
		{
			name: "TBC New Researcher",
			project: "Research Project",
			image: `${base}/images/placeholder.jpg`,
			social: [
				{
					url: "https://linkedin.com",
					icon: "fab fa-linkedin-in",
				},
			],
		},
	];
</script>

{#snippet staff()}
	<div class="members">
		{#each STAFF as member}
			<div class="member staff">
				<img src={member.image} alt={member.name} />
				<h3>{member.name}</h3>
				<p>{member.role}</p>
				<div class="social">
					{#each member.social as link}
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.icon}
						>
							<i class={link.icon}></i>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
{/snippet}

{#snippet students()}
	<div class="members">
		{#each STUDENTS as student}
			<div class="member student">
				<img src={student.image} alt={student.name} />
				<h3>{student.name}</h3>
				<p>{student.project}</p>
				<div class="social">
					{#each student.social as link}
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.icon}
						>
							<i class={link.icon}></i>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
{/snippet}

<div class="team">
	<Tabs {tabs} {staff} {students} />
</div>

<style lang="scss">
	@use "../assets/global";
	.team {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: global.$margin-1 * 2 global.$margin-1 0
			calc(global.$margin-1 * 7 / 3);

		.members {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			align-items: flex-start;
			padding-top: global.$margin-1;

			.member {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				box-sizing: border-box;
				// background-color: rgba(240, 248, 255, 0.4);
				// border-radius: 30px;
				text-align: center;

				$s: 6px;
				// $border-color: rgba(183, 165, 220, 0.3);
				$border-color: rgb(247, 245, 253);
				// $border-shaodw-color: rgba(255, 255, 255, 0.5);
				$border-shaodw-color: rgba(2, 1, 19, 0.5);

				border: 4px solid $border-color;
				box-shadow:
					0 0 $s $border-shaodw-color,
					0 0 $s * 2 $border-shaodw-color,
					0 0 $s $border-shaodw-color,
					0 0 $s * 2 $border-shaodw-color;
				// background-color: rgba(183, 165, 220, 0.3);
				// background-color: rgba(247, 245, 253, 0.3);
				background: linear-gradient(
					135deg,
					rgba(33, 15, 55, 1),
					rgba(9, 13, 32, 1)
				);

				@include global.galssblur(2px);
				&:last-child {
					margin-right: 0;
				}

				&.staff {
					$w: 375px;
					width: $w;
					height: calc($w * 5 / 4);
					margin-right: global.$margin-1;
					padding: calc(global.$margin-1 / 2);
				}

				&.student {
					$w: 300px;
					width: $w;
					height: calc($w * 5 / 4);
					// margin-right: global.$margin-1;
					padding: calc(global.$margin-1 / 2);
				}

				img {
					width: 180px;
					height: 180px;
					border-radius: 50%;
				}
			}
		}
	}
</style>
