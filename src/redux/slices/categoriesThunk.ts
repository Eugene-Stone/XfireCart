import { createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api/request';
import type { Category } from '../../types';

export const fetchCategories = createAsyncThunk<Category[]>(
	'categories/fetchCategories',
	async () => {
		return await request<Category[]>('/categories');
	},
);
