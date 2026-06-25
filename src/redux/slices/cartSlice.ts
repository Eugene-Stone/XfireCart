import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CartType, Product } from '../../types';

export interface cartState {
	cartList: CartType[];
}

const cartFromStorage = localStorage.getItem('cart');

const initialState: cartState = {
	cartList: cartFromStorage ? JSON.parse(cartFromStorage) : [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,

	reducers: {
		addProduct: (state, action: PayloadAction<CartType>) => {
			const existingProduct = state.cartList.find(
				(item) =>
					item.id === action.payload.id &&
					item.activePower === action.payload.activePower,
			);

			// console.log(action.payload);
			// console.log(existingProduct);
			// console.log(action.payload.activePower);

			if (existingProduct) {
				if (existingProduct.count) {
					existingProduct.count = existingProduct.count + 1;
				}

				return;
			}

			state.cartList.push({
				...action.payload,
				count: 1,
			});
		},
		decrementProduct: (state, action: PayloadAction<CartType>) => {
			const existingProduct = state.cartList.find(
				(item) =>
					item.id === action.payload.id &&
					item.activePower === action.payload.activePower,
			);

			if (existingProduct) {
				if (existingProduct.count) {
					if (existingProduct.count > 1) {
						existingProduct.count = existingProduct.count - 1;
					}
					return;
				}
			} else {
				state.cartList = state.cartList.filter(
					(item) =>
						item.id !== action.payload.id ||
						item.activePower !== action.payload.activePower,
				);
			}
		},
		removeProduct: (state, action: PayloadAction<CartType>) => {
			state.cartList = state.cartList.filter(
				(item) =>
					!(
						item.id === action.payload.id &&
						item.activePower === action.payload.activePower
					),
			);
		},
		clearCart: (state) => {
			state.cartList = [];
		},
	},
});

export const { addProduct, decrementProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
