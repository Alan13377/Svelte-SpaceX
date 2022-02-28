<script context="module">
	export async function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	export let error, status;
</script>

<svelt:head>
	<title>{status}</title>
</svelt:head>

<h1>{status}</h1>
<p>La pagina no Existe !!</p>
<h2>{status}: {error.message}</h2>
