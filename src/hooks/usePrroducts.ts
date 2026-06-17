import { useState, useEffect } from 'react';
import request from '../api/request';

import type { Product } from '../types';

export default function usePrroducts() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [errorData, setErrorData] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		async function fetchData() {
			try {
				const products = await request<Product[]>('/products', {
					method: 'GET',
					signal: controller.signal,
				});

				setProducts(products);
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
