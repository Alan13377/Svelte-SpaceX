<script context="module">
	export const load = async ({ params }) => ({
		props: {
			key: params
		}
	});
</script>

<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Transicion from '../components/transicion.svelte';
	export let key;
</script>

<main class="mx-auto max-w-5xl px-4 sm:px-6">
	<Navbar />
	<Transicion refresh={key}>
		<slot />
	</Transicion>
</main>
