<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/launches.json');
		if (response.ok) {
			const { launches } = await response.json();
			return {
				props: {
					launches
				}
			};
		}
	}
</script>

<script>
	import Card from '../components/Card.svelte';
	export let launches;
</script>

<div>
	{#each launches as { slug, name, date }}
		<Card {slug} {name} {date} />
	{/each}
</div>
