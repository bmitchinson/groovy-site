import { getAllCollections } from '$lib/shopify';
import { error } from '@sveltejs/kit';

const mainCollection = 'home-collection';

const getCollection = (products: Array[object], name: string) => {
	// refactor: gotta clean these queries to be more slim + get a specific collection
	return products.filter((o) => o.node.handle === name)[0].node.products.edges.map((o) => o.node);
};

export async function load({ url }) {
	const res = await getAllCollections();
	if (res.status === 200) {
		const products = res.body?.data?.collections?.edges;

		if (products) {
			const mainProducts = getCollection(products, mainCollection);
			return { products: mainProducts };
		}
		throw error(404);
	} else {
		throw error(res.status, JSON.stringify(res?.body?.errors));
	}
}
