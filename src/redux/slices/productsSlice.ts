import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsThunk';
import { fetchCategories } from './categoriesThunk';
import type { Product, Category } from '../../types';

export interface ProductsState {
	products: Product[];
	loading: boolean;
	errorData: string | null;
	currentCategory: string;
	searchValue: string;
	sortBy: string;
	sortOrder: 'asc' | 'desc';
	categories: Category[];
}

const initialState: ProductsState = {
	products: [],
	loading: true,
	errorData: null,
	currentCategory: 'электро',
	searchValue: '',
	sortBy: '',
	sortOrder: 'asc',
	categories: [],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setCurrentCategory: (state, action) => {
			state.currentCategory = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.errorData = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.errorData = action.error.message ?? 'Ошибка';
			});
	},
});

export const { setCurrentCategory } = productsSlice.actions;
export default productsSlice.reducer;
