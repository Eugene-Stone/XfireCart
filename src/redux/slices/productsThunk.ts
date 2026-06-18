import { createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api/request';
import type { Product } from '../../types';
import type { RootState } from '../store';

export const fetchProducts = createAsyncThunk<Product[], void, { state: RootState }>(
	'products/fetchProducts',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();

		const { currentCategory, searchValue, sortBy, sortOrder } = state.productsReducer;

		let url = '/products?';

		if (currentCategory !== 'Все' && currentCategory !== '') {
			url += `category:eq=${currentCategory}&`;
		}

		if (searchValue) {
			url += `name:contains=${searchValue}&`;
		}

		if (sortBy !== '') {
			url += `_sort=${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
		}

		// console.log(url);
		return await request<Product[]>(url);
	},
);
