<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	/* import bgImage from  '$lib/assets/images/bellarushe/bellarushe_vase1.2.jpg' */
	import { isDarkTheme } from '$lib/store/store';
	import '../app.css';

	// So we can use class:dark
	$: dark = $isDarkTheme;
</script>

<div class:dark>
	<div>
		<div tabindex="-1" class="flex bg-primary-coderight justify-center absolute w-full z-10">
			<a
				class="flex my-2 sr-only focus:not-sr-only focus:h-24 items-center font-bold"
				href="#maincontent">Skip to main content</a
			>
		</div>

		<Header />
		<main id="maincontent">
			<!-- <img class="absolute top-0 right-0 h-50 -z-10" src={bgImage} alt=""> -->
			<slot />
		</main>
		<Footer />
	</div>
</div>

<style>
</style>
