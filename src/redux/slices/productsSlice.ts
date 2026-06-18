import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsThunk';
import type { Product, Category } from '../../types';

export interface ProductsState {
	products: Product[];
	loading: boolean;
	errorData: string | null;
	currentCategory: string;
	searchValue: string;
	sortBy: string;
	sortOrder: 'asc' | 'desc';

	page: number;
	per_page: number;
	pages: number;
	items: number;

	first: number | null;
	prev: number | null;
	next: number | null;
	last: number | null;
}

const initialState: ProductsState = {
	products: [],
	loading: true,
	errorData: null,
	currentCategory: '',
	searchValue: '',
	sortBy: 'popularity',
	sortOrder: 'desc',

	// Json-server pagination
	page: 1,
	per_page: 4,
	pages: 0,
	items: 0,

	first: null,
	prev: null,
	next: null,
	last: null,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setCurrentCategory: (state, action) => {
			state.currentCategory = action.payload;
		},
		setSortBy: (state, action) => {
			state.sortBy = action.payload;
		},
		setSortOrder: (state, action) => {
			state.sortOrder = action.payload;
		},
		setPage: (state, action) => {
			state.page = action.payload;
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
				// state.products = action.payload;
				state.products = action.payload.data;
				state.pages = action.payload.pages;
				state.items = action.payload.items;

				state.first = action.payload.first;
				state.prev = action.payload.prev;
				state.next = action.payload.next;
				state.last = action.payload.last;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.errorData = action.error.message ?? 'Ошибка';
			});
	},
});

export const { setCurrentCategory, setSortBy, setSortOrder, setPage } = productsSlice.actions;
export default productsSlice.reducer;
