import { useState, useEffect } from 'react';
import request from '../api/request';

import type { Product } from '../types';

export default function useProducts() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [errorData, setErrorData] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		async function fetchData() {
			try {
				const productsData = await request<Product[]>('/products?category:eq=электро', {
					method: 'GET',
					signal: controller.signal,
				});

				setProducts(productsData);
			} catch (error) {
				setErrorData(error instanceof Error ? error.message : 'Unknown error');
			} finally {
				setTimeout(() => {
					setLoading(false);
				}, 500);
			}
		}

		fetchData();
		return () => {
			controller.abort();
		};
	}, []);

	return {
		products,
		loading,
		errorData,
	};
}
