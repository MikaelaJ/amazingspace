<script lang="ts">
	import Post from '$lib/Post.svelte';
	import type { PageServerData } from './$types';
	import bellarushe from '$lib/assets/images/bellarushe/bella_rushe.png';

	export let data: PageServerData;
</script>

<main>
	<div class="container flex-col max-w-4xl my-20">
		<div
			class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<img
				class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
				src={bellarushe}
				alt=""
			/>
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Noteworthy technology acquisitions 2021
				</h5>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
					chronological order.
				</p>
			</div>
		</div>
		<!-- <div class="w-2/3">
			<h1 class="flex font-bold">Bella & Rushe</h1>
			<p class="flex">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit diam magna, sit amet
				aliquet odio lacinia at. Pellentesque nec turpis tristique, dictum mauris nec, porttitor
				leo. Phasellus pretium erat non leo lobortis tristique. Quisque egestas ligula vel nisi
				ultrices lobortis id tristique nisl. Integer nec rhoncus tellus, viverra accumsan lectus.
				Morbi iaculis auctor mi ac feugiat. Sed finibus arcu vitae libero aliquet porttitor nec vel
				urna. Mauris non porttitor nibh, sit amet faucibus nisl. Integer eu faucibus lorem, ut
				accumsan urna. Aliquam erat volutpat. Nam congue molestie lectus, vel pellentesque mi varius
				eget.
			</p>
		</div>
		<div class="w-1/3">
			<img src={bellarushe} alt="">
		</div>
	</div> -->
		<section class="container max-w-7xl">
			<Post {...data.feed} />
		</section>
	</div>
</main>
