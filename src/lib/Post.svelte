<script lang="ts">
	import type { Person, Post } from './models/interface';
	import hector from '$lib/assets/images/yesbutsure/Hector_1.jpg';
	import hector2 from '$lib/assets/images/yesbutsure/Hector_2.jpg';
	import vase1 from '$lib/assets/images/bellarushe/bellarushe_vase1.1.jpg';
	import vase2 from '$lib/assets/images/bellarushe/bellarushe_vase1.2.jpg';
	import vase3 from '$lib/assets/images/bellarushe/bellarushe_vase2.1.jpg';

	export let brandName: string;
	export let posts: Post[];
	export let description: string;
	export let persons: Person[];
	export let slug: string;
	/* export let image: string; */
	/* export let post: Artist[]; */

	/* $: ({title, artistName, description, users, posts} = props); */
	const getImgSource = (name: string) => {
		switch (name) {
			case 'hector_1':
				return hector;
				break;
			case 'hector_2':
				return hector2;
				break;
			case 'vase_1':
				return vase1;
				break;
			case 'vase_2':
				return vase2;
				break;
			case 'vase_3':
				return vase3;
				break;

			default:
				null;
				break;
		}
	};
</script>

<div class="justify-between">
	<a href={`/yesbutsure/${slug}`}>
		<div class="grid grid-cols-1 w-full gap-2 sm:grid-cols-2 md:gap-7 lg:grid-cols-3 my-12">
			{#each posts as { content, title, image }}
				<div class="flex flex-col cursor-pointer rounded-sm md:flex border-black-ybs shadow">
					<img class="h-64 w-full object-top object-cover" src={getImgSource(image)} alt={`${brandName}`} />
					<div class="p-4">
						<h3 class="text-lg font-bold text-primary-ybs">
							{title}
						</h3>
						<p>POST content{content}</p>
						<p>POST {title}</p>
						{#each persons as { name, email }}
							<p class="italic dark:text-black-ybs text-secondary-ybs text-sm">{name}, {email}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</a>
</div>
