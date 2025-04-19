<script lang="ts">
	import { base } from "$app/paths";

	type Staff = {
		name: string;
		role: string;
		image: string;
		social: Array<{
			url: string;
			icon: string;
		}>;
	};

	const STAFF_LIST: Staff[] = [
		{
			name: "Dr. Almas Baim",
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
			name: "Dr. Khizer Saeed",
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
			name: "Dr. Shanay Rab",
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

	let active_staff_index = $state(0);
</script>

{#snippet staff(member: Staff)}
	<div class="profile">
		<img src={member.image} alt={member.name} />
		<div class="r">
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
	</div>
	<div class="desc">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae
		sed, suscipit eum officia magni a itaque nisi doloribus minus ut, optio
		tenetur eos magnam excepturi expedita totam soluta asperiores?
	</div>
{/snippet}

<div class="staff">
	<div class="detail">
		{@render staff(STAFF_LIST[active_staff_index])}
	</div>

	<div class="staff-list">
		{#each STAFF_LIST as member, i}
			<div class="member">
				<button
					onclick={() => {
						active_staff_index = i;
					}}
				>
					<img
						src={member.image
							? member.image
							: `${base}/images/placeholder.jpg`}
						alt={member.name}
					/>
					<span class="name">
						{member.name}
					</span>
				</button>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@use "../assets/global";

	.staff {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: global.$margin-1 * 2 global.$margin-1 global.$margin-1 * 2
			calc(global.$margin-1 * 7 / 3);

		.detail {
			position: relative;
			width: 58%;
			flex: 1 1 auto;

			.profile {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				margin-bottom: global.$margin-1;
				img {
					width: 200px;
					height: 200px;
					border: 4px solid global.$font-white;
					margin-right: global.$margin-1;
				}

				.r {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: center;
					h3 {
						font-size: 32px;
						margin-bottom: global.$margin-1 / 2;
						@include global.operation-font;
					}

					p {
						font-size: 24px;
						margin-bottom: global.$margin-1 / 2;
						@include global.operation-font;
					}

					.social {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: flex-start;

						a {
							margin-right: global.$margin-1 / 2;

							i {
								color: global.$font-white;
								font-size: 24px;
							}
						}
					}
				}
			}

			.desc {
				font-size: 20px;
				line-height: 1.5;
			}
		}

		.staff-list {
			$h: 86px;

			width: 100%;
			height: $h;
			flex-grow: 0;
			display: flex;
			flex-direction: row;
			overflow: hidden;

			.member {
				margin-right: global.$margin-1/ 2;
				width: 460px;
				position: relative;

				@include global.button-top;

				button {
					@include global.button-bottom;

					padding: global.$margin-1 / 4 global.$margin-1 / 2;
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-start;
				}

				img {
					width: calc($h - global.$margin-1 / 2);
					height: calc($h - global.$margin-1 / 2);
					border-radius: 50%;
					text-align: center;
					margin-right: global.$margin-1/ 2;
				}

				.name {
					font-size: 24px;

					@include global.operation-font;
				}
			}
		}
	}

	// .team {
	// 	display: flex;
	// 	flex-direction: column;
	// 	align-items: flex-start;
	// 	justify-content: space-between;
	// 	width: 100%;
	// 	height: 100%;
	// 	box-sizing: border-box;
	// 	padding: global.$margin-1 * 2 global.$margin-1 0
	// 		calc(global.$margin-1 * 7 / 3);

	// 	.members {
	// 		width: 100%;
	// 		height: 100%;
	// 		display: flex;
	// 		flex-direction: row;
	// 		flex-wrap: wrap;
	// 		justify-content: center;
	// 		align-items: flex-start;
	// 		padding-top: global.$margin-1;

	// 		.member {
	// 			display: flex;
	// 			flex-direction: column;
	// 			align-items: center;
	// 			justify-content: center;
	// 			box-sizing: border-box;
	// 			// background-color: rgba(240, 248, 255, 0.4);
	// 			// border-radius: 30px;
	// 			text-align: center;

	// 			$s: 6px;
	// 			// $border-color: rgba(183, 165, 220, 0.3);
	// 			$border-color: rgb(247, 245, 253);
	// 			// $border-shaodw-color: rgba(255, 255, 255, 0.5);
	// 			$border-shaodw-color: rgba(2, 1, 19, 0.5);

	// 			border: 4px solid $border-color;
	// 			box-shadow:
	// 				0 0 $s $border-shaodw-color,
	// 				0 0 $s * 2 $border-shaodw-color,
	// 				0 0 $s $border-shaodw-color,
	// 				0 0 $s * 2 $border-shaodw-color;
	// 			// background-color: rgba(183, 165, 220, 0.3);
	// 			// background-color: rgba(247, 245, 253, 0.3);
	// 			background: linear-gradient(
	// 				135deg,
	// 				rgba(33, 15, 55, 1),
	// 				rgba(9, 13, 32, 1)
	// 			);

	// 			@include global.galssblur(2px);
	// 			&:last-child {
	// 				margin-right: 0;
	// 			}

	// 			&.staff {
	// 				$w: 375px;
	// 				width: $w;
	// 				height: calc($w * 5 / 4);
	// 				margin-right: global.$margin-1;
	// 				padding: calc(global.$margin-1 / 2);
	// 			}

	// 			&.student {
	// 				$w: 300px;
	// 				width: $w;
	// 				height: calc($w * 5 / 4);
	// 				// margin-right: global.$margin-1;
	// 				padding: calc(global.$margin-1 / 2);
	// 			}

	// 			img {
	// 				width: 180px;
	// 				height: 180px;
	// 				border-radius: 50%;
	// 			}
	// 		}
	// 	}
	// }
</style>
