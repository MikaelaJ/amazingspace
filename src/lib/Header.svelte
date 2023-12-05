<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/amazingspace_logo_metallic.png';
	import { isDarkTheme } from '$lib/store/store';

	const toggleDark = () => ($isDarkTheme = !$isDarkTheme);
</script>

<div class="flex bg-secondary-ybs dark:bg-black-ybs">
	<div class="container my-6 flex justify-between max-w-7xl">
		<div class="md:flex">
			<a href="/">
				<!-- <img src={`${$isDarkTheme ? whiteLogo : logo}`} alt="B3 logo" width="150" /> -->
				<img src={logo} alt="B3 logo" width="180" />
			</a>
		</div>

		<div class="flex">
			<nav class="">
				<ul class="flex justify-between">
					<li>
						<a
							class:active={$page.url.pathname === '/yesbutsure'}
							class="font-bold text-primary-ybs-darker dark:text-secondary-ybs"
							href="/yesbutsure">Yes But Sure</a
						>
					</li>
					<li>
						<a
							class:active={$page.url.pathname === '/bellarushe'}
							class="font-bold text-primary-ybs-darker dark:text-secondary-ybs ml-6"
							href="/bellarushe">Bella Rushe</a
						>
					</li>
					<li>
						<a
							class:active={$page.url.pathname === '/josefin'}
							class="font-bold text-primary-ybs-darker dark:text-secondary-ybs ml-6"
							href="/josefin">Josefin</a
						>
					</li>
					<!-- <li>
						<a
							class:active={$page.url.pathname === '/rosanna'}
							class="font-bold text-primary-ybs-darker dark:text-secondary-ybs ml-6"
							href="/rosanna">Rosanna</a
						>
					</li>
					<li>
						<a
							class:active={$page.url.pathname === '/adam'}
							class="font-bold text-primary-ybs-darker dark:text-secondary-ybs ml-6"
							href="/adam">Adam</a
						>
					</li> -->
					<li class="pl-12">
						<button aria-label="dark mode toggle" on:click={toggleDark} class="">
							{#if $isDarkTheme}
								<p class="font-bold dark:text-white">Light</p>
							{:else}
								<p class="font-bold">Dark</p>
							{/if}
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</div>
