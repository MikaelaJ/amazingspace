<script lang="ts">
	import type { Brand, Person, Post } from './models/interface';
	import vase1 from '$lib/assets/images/bellarushe/bellarushe_vase1.1.jpg';
	import vase2 from '$lib/assets/images/bellarushe/bellarushe_vase1.2.jpg';
	import vase3 from '$lib/assets/images/bellarushe/bellarushe_vase2.1.jpg';
	import vase4 from '$lib/assets/images/bellarushe/bellarushe_vase2.2.jpg';
	import hector1 from '$lib/assets/images/yesbutsure/Hector_1.jpg';
	import hector2 from '$lib/assets/images/yesbutsure/Hector_2.jpg';

	/* export let persons: Person[]; */
	export let posts: Post[];
	export let brandName: string;
	export let description: string;
	/* export let title: string;
	export let id: number;
	export let data: Brand[]; */

	/* export let image: string; */
	/* export let post: Artist[]; */

	/* $: ({title, artistName, description, users, posts} = props); */
	const getImgSource = (name: string) => {
		switch (name) {
			case 'vase_1':
				return vase1;
				break;
			case 'vase_2':
				return vase2;
				break;
			case 'vase_3':
				return vase3;
				break;
			case 'vase_4':
				return vase4;
				break;
			case 'hector_1':
				return hector1;
				break;
			case 'hector_2':
				return hector2;
				break;

			default:
				null;
				break;
		}
	};
</script>

<div class="container flex flex-col">
	<!-- <a href={`/cases/${slug}`}> -->

	<div class="flex-col text-center mt-12">
			<h1 class="bg-primary-ybs-darker dark:bg-secondary-ybs p-6 font-serif text-secondary-ybs dark:text-primary-ybs-darker">{brandName}</h1>
			<div class="flex justify-center">
				<p class="flex text-black-ybs dark:text-primary-ybs-lighter my-6 px-12 max-w-3xl">{description}</p>
			</div>
		</div>

	<div class="flex">
		<div class="grid grid-cols-1 w-full gap-2 sm:grid-cols-2 md:gap-7 lg:grid-cols-3 my-12 ">
			{#each posts as {image, content, title}}
				<div
					class="flex flex-col cursor-pointer rounded-sm md:flex border-black-ybs shadow dark:bg-black-ybs-lighter"
				>
					<a href="/">
						<img
							class="h-64 w-full object-top object-cover"
							src={getImgSource(image)}
							alt={`Bild som återkopplar till projektet: ${brandName}`}
						/>
					</a>
					<div class="flex flex-col p-4">
						<h3 class="text-lg uppercase text-black-ybs dark:text-primary-ybs-lighter">
							{title}
						</h3>
						<p class="italic text-black text-sm text-black-ybs dark:text-primary-ybs-lighter">{content}</p>
						<!-- <p class="text-sm text-black-ybs">{description}</p> -->
						<!-- <p class="italic text-secondary-ybs">{brandName}{id}</p> -->
						
					</div>
				</div>
			{/each}
		</div>
	</div>
	<!-- </a> -->
</div>
