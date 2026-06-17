import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './categoriesThunk';
import type { Category } from '../../types';

export interface categoriesState {
	categories: Category[];
}

const initialState: categoriesState = {
	categories: [],
};

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.categories = action.payload;
		});
	},
});

// export const { setCurrentCategory } = productsSlice.actions;
export default categoriesSlice.reducer;
