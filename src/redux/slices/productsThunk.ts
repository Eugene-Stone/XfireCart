import { createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api/request';
import type { Product } from '../../types';
import type { RootState } from '../store';

interface ProductsResponse {
	first: number;
	prev: number | null;
	next: number | null;
	last: number;
	pages: number;
	items: number;
	data: Product[];
}

export const fetchProducts = createAsyncThunk<ProductsResponse, void, { state: RootState }>(
	'products/fetchProducts',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();

		const { currentCategory, searchValue, sortBy, sortOrder, page, per_page } =
			state.productsReducer;

		let url = '/products?';

		url += `_page=${page}&_per_page=${per_page}&`;

		if (currentCategory !== 'Все' && currentCategory !== '') {
			url += `category:eq=${currentCategory}&`;
		}

		if (searchValue) {
			url += `name:contains=${searchValue}&`;
		}

		if (sortBy !== '') {
			// Если сортируем по цене — подставляем поле дефолтной цены
			const sortField = sortBy === 'price' ? 'defaultPrice' : sortBy;

			url += `_sort=${sortOrder === 'desc' ? '-' : ''}${sortField}&`;
		}

		// console.log(url);
		// return await request<Product[]>(url);

		const response = await request<ProductsResponse>(url);

		return response;
	},
);

// GET /posts?_page=1&_per_page=25
