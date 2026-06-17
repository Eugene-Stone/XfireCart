import { useState, createContext } from 'react';
import usePrroducts from '../../hooks/usePrroducts';
import type { Product } from '../../types.ts';

type ProductsContextType = {
	products: Product[];
	loading: boolean;
	errorData: string | null;
};

const ProductsContext = createContext<ProductsContextType | null>(null);

export default function ProductsProvider({ children }: React.PropsWithChildren) {
	const { products, loading, errorData } = usePrroducts();

	return (
		<ProductsContext.Provider value={{ products, loading, errorData }}>
			{children}
		</ProductsContext.Provider>
	);
}

export { ProductsContext };
