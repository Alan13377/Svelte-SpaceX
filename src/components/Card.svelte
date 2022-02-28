<script>
	export let slug;
	export let name;
	export let date;
</script>

<ul>
	<li class="border-primary border rounded-xl my-5 p-5 transition hover:bg-secondary">
		<a href={`/mission/${slug}`}>
			<h2 class="text-3xl">{name}</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<time>{new Date(date)}</time>
		</a>
	</li>
</ul>
