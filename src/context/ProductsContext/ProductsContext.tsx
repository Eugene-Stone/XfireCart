import { useState, createContext } from 'react';
import usePrroducts from '../../hooks/useProducts';
import type { Product, Category } from '../../types.ts';
import useCategories from '../../hooks/useCategories.ts';

type ProductsContextType = {
	products: Product[];
	loading: boolean;
	errorData: string | null;
	categories: Category[];
};

const ProductsContext = createContext<ProductsContextType | null>(null);

export default function ProductsProvider({ children }: React.PropsWithChildren) {
	const { products, loading, errorData } = usePrroducts();
	const { categories } = useCategories();

	// const categoriesList = [...new Set(products.map((prod) => prod.category))];
	// console.log(categoriesList);

	return (
		<ProductsContext.Provider value={{ products, loading, errorData, categories }}>
			{children}
		</ProductsContext.Provider>
	);
}

export { ProductsContext };
