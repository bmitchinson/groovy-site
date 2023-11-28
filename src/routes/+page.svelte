<script lang="ts">
	import ProductPreview from '../components/productPreview.svelte';

	export let data;

	const productList = data.products;
</script>

<!-- <p>{productList}</p> -->

{#each productList as product}
	<ProductPreview {product} />
{/each}
