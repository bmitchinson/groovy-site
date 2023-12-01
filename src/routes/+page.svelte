<script lang="ts">
	import ProductPreview from '../components/productPreview.svelte';

	export let data;

	const productList = data.products;
</script>

<div class="flex justify-center w-full text-xl mt-[2rem] mb-[4rem]">
	<h1>Groovy Basement</h1>
</div>
<div class="grid grid-cols-3 gap-2 mb-[4rem]">
	{#each productList as product}
		<ProductPreview {product} />
	{/each}
</div>

<!-- note: why doesn't this work? terminal err -->
<!-- <style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style> -->
