<script context="module">
	/* export async function load(context) {
		console.log(context);
		return {
			props: {}
		};
	} */

	export async function load({ fetch, params }) {
		const { slug } = params;
		const response = await fetch(`/mission/${slug}.json`);
		if (response.ok) {
			const { mission } = await response.json();
			return {
				props: {
					mission
				}
			};
		}
	}
</script>

<script>
	export let mission;
	const { date, name, launchSuccess, rocket, launchSite, link } = mission;
</script>

<svelte:head>
	<title>Misiones</title>
</svelte:head>

<article>
	<h1 class="text-4xl">{name}</h1>
	<time>{new Date(date)}</time>
	{#if launchSuccess}
		<p class="text-xl mb-2">Lanzamiento Exitoso</p>
	{:else}
		<p class="text-xl mb-2">Lanzamiento Fallido</p>
	{/if}
	<p class="text-xl mb-2">
		<strong>Sitio de Lanzamiento:</strong>
		{launchSite.longName}
	</p>
	<p class="text-xl mb-2">
		<strong>Sitio de Lanzamiento nombre corto:</strong>
		{launchSite.name}
	</p>

	<section>
		<h2 class="mb-4 text-3xl">Articulo</h2>
		<ul>
			{#if link.articleLink}
				<li><a href={link.articleLink}>Articulo</a></li>
			{/if}
			{#if link.pressKit}
				<li><a href={link.pressKit}>Press Kit</a></li>
			{/if}
			{#if link.videoLink}
				<li><a href={link.videoLink}>Video Link</a></li>
			{/if}
			{#if link.wikipedia}
				<li><a href={link.wikipedia}>Wikipedia</a></li>
			{/if}
		</ul>

		{#if link.flickrImages.length > 0}
			<h3 class="text-2xl">Flickr Images:</h3>
			{#each link.flickrImages as image}
				<br />
				<img class="last:mb-8" src={image.url} alt={image.alt} />
			{/each}
		{/if}
	</section>
	<h3 class="mb-4 text-2xl">
		Rocket Name: {rocket.name}, Type: {rocket.type}
	</h3>
	<img src={rocket.image.url} alt={rocket.name} />
</article>
