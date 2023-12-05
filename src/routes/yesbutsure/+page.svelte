<script lang="ts">
	import Post from '$lib/Post.svelte';
	/* import imageUrl from '$lib/assets/hector.jpg'; */
	import type { PageServerData } from './$types';
	
	

	export let data: PageServerData;
</script>

<main>
	<div class="container flex-col max-w-4xl my-20">
		<h1 class="flex font-bold">Yes But Sure</h1>
		<p class="flex">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit diam magna, sit amet
			aliquet odio lacinia at. Pellentesque nec turpis tristique, dictum mauris nec, porttitor leo.
			Phasellus pretium erat non leo lobortis tristique. Quisque egestas ligula vel nisi ultrices
			lobortis id tristique nisl. Integer nec rhoncus tellus, viverra accumsan lectus. Morbi iaculis
			auctor mi ac feugiat. Sed finibus arcu vitae libero aliquet porttitor nec vel urna. Mauris non
			porttitor nibh, sit amet faucibus nisl. Integer eu faucibus lorem, ut accumsan urna. Aliquam
			erat volutpat. Nam congue molestie lectus, vel pellentesque mi varius eget.
		</p>
	</div>
	<section class="container max-w-7xl">
		<Post {...data.feed} />
	</section>
</main>
