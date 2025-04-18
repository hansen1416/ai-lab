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
			<div class="member">
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
			<div class="member">
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
	<div class="staff-students">
		<Tabs {tabs} {staff} {students} />
	</div>
	<!-- <div>
		<span>STAFF</span>
		{#each STAFF as member}
			<div class="member">
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
	<div>
		<span>STUDENTS</span>
		{#each STUDENTS as student}
			<div class="member">
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
	</div> -->
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

		.staff-students {
			display: flex;
			flex-direction: column;
			flex: 1 1 auto;

			.members {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				.member {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 460px;
					img {
						width: 180px;
						height: 180px;
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>
