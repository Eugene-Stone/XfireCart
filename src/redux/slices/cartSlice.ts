import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types';

export type CartType = {
	id: number;
	name: string;
	image: string;
	category: string;
	types: { typeName: string }[];
	power_options: string[];
	price: Record<string, number>;
	count: number;
	activePower: string;
};

export interface cartState {
	cartList: CartType[];
	// totalCount: number;
	// totalPrice: number;
}

const initialState: cartState = {
	cartList: [],
	// totalCount: 0,
	// totalPrice: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,

	reducers: {
		addProduct: (state, action) => {
			const existingProduct = state.cartList.find(
				(item) =>
					item.id === action.payload.id &&
					item.activePower === action.payload.activePower,
			);

			console.log(action.payload);
			console.log(existingProduct);
			console.log(action.payload.activePower);

			if (existingProduct) {
				existingProduct.count = existingProduct.count + 1;
				return;
			}

			state.cartList.push({
				...action.payload,
				count: 1,
			});
		},
		clearCart: (state) => {
			state.cartList = [];
		},
	},
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
