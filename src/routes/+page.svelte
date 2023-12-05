<script lang="ts">
	import type { PageServerData } from './$types';
	import type { Brand } from '../lib/models/interface';
	import Card from '$lib/Card.svelte';
	import bgImage from '$lib/assets/images/bellarushe/bellarushe_vase1.1.jpg';

	export let data: PageServerData;
	/* export let props: Artist[]; */
</script>

<main class="dark:bg-black-ybs">

	
		<div class="container flex-col max-w-6xl md:pt-20 mb-12">
			<div class="flex mb-20">
				<div class="z-10">
					<h1 class="flex text-8xl flex-col text-black-ybs dark:text-primary-ybs-lighter font-serif mb-8">
						Vilka är vi
					</h1>
					<p class="text-black-ybs dark:text-primary-ybs-lighter">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lorem nec odio
						convallis, et aliquet diam ultrices. Sed commodo ultricies turpis, ac mattis nibh vehicula
						at. Nulla porttitor, purus vitae porta placerat, arcu ligula porta sapien, vel suscipit
						odio felis a metus. Pellentesque efficitur at urna ac gravida. Quisque porttitor odio
						lectus, vitae dignissim orci aliquam at. Nulla elit neque, hendrerit id elementum non,
						convallis non ante. Nunc sit amet mattis mi, tristique viverra nulla. Ut vitae sapien
						quam. Fusce dictum ultricies ultrices. Maecenas eu libero nec dolor dignissim consequat.
						Suspendisse sollicitudin interdum velit a elementum. Quisque rutrum nec purus vel lacinia.
						Vivamus tristique metus quis sapien sagittis, eget rhoncus felis placerat. Etiam
						fermentum.
					</p>
				</div>
				<div class="image bg-cover w-1/3 noise" style="background-image: url('{bgImage}')">
				</div>
			</div>
		</div>
		<section class="container max-w-7xl">
			{#each data.response as post}
				<Card {...post} />
			{/each}
		</section>
</main>

<style>

	.image {
		min-height: 50vh;
		min-width: 30vw;
		background-repeat: no-repeat;
	}
	.noise {
		/* ... */
		background: linear-gradient(20deg, #acf2d8, transparent),
			url(https://grainy-gradients.vercel.app/noise.svg);

		/* shape-outside: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
		shape-margin: 20px; */
		clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
		/* filter: contrast(50%); */
		float: right;
	}
	.clip {
		clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
	}
	.overlay {
		/* ... */
		background: moccasin;
		mix-blend-mode: multiply;
	}
</style>
