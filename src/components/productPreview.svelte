<script lang="ts">
	import { parsePrice } from '$lib/parsers';

	export let product: any;

	const minPrice = parsePrice(product.priceRange.minVariantPrice.amount);
	const maxPrice = parsePrice(product.priceRange.maxVariantPrice.amount);

	const priceDesc = minPrice === maxPrice ? minPrice : `${minPrice} - ${maxPrice}`;
	const leadingImgUrl = product.images.edges[0].node.originalSrc;
</script>

<div class="flex flex-col items-center space-y-3">
	<img class="product-preview-img" src={leadingImgUrl} alt={product.description} />
	<h3 class="text-1xl font-bold text-center max-w-[50%]">{product.title}</h3>
	<p>{priceDesc}</p>
</div>

<style>
	.product-preview-img {
		max-height: 20em;
	}
</style>
