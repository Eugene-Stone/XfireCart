import { useContext } from 'react';
import { ProductsContext } from './ProductsContext.tsx';

export function useProductsContext() {
	const context = useContext(ProductsContext);

	if (!context) {
		throw new Error('ProductsContext error');
	}

	return context;
}
