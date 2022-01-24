import { Product } from 'types/product';

async function fetchPopularTabs(): Promise<Product[]> {
	const { data } = await Promise.resolve<{ data: Product[] }>({
		data: [
			{ id: '1', name: 'Hozier - Take me to church', price: 379 },
			{ id: '2', name: 'Linkin Park - Numb', price: 499 },
		],
	});

	return data;
}

async function fetchLatestTabs(): Promise<Product[]> {
	const { data } = await Promise.resolve({
		data: [
			{ id: '3', name: 'Hozier - Take me to church', price: 379 },
			{ id: '4', name: 'Linkin Park - Numb', price: 499 },
		],
	});

	return data;
}

async function fetchTabs(): Promise<Product[]> {
	const { data } = await Promise.resolve({
		data: [
			{ id: '5', name: 'Hozier - Take me to church', price: 379 },
			{ id: '6', name: 'Linkin Park - Numb', price: 499 },
			{ id: '7', name: 'Кино - Перемен', price: 499 },
			{ id: '8', name: 'The Cranberries - Zombie', price: 499 },
			{ id: '9', name: 'Джарахов Markul - Я в моменте', price: 499 },
			{ id: '10', name: 'Dabro - Юность', price: 499 },
			{ id: '11', name: 'The Weeknd - Blinding Lights', price: 499 },
		],
	});

	return data;
}

export { fetchPopularTabs, fetchLatestTabs, fetchTabs };
