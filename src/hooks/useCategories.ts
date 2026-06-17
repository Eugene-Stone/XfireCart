import { useState, useEffect } from 'react';
import request from '../api/request';
import type { Category } from '../types';

export default function useCategories() {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);
	const [errorData, setErrorData] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		async function fetchData() {
			try {
				const categoriesData = await request<Category[]>('/categories', {
					method: 'GET',
					signal: controller.signal,
				});

				setCategories(categoriesData);
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
		categories,
		loading,
		errorData,
	};
}
