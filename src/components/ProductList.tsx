import React from 'react';
import ProductCard from './ProductCard';
import Filter from './Filter';
import Sort from './Sort';
import { useProductsContext } from '../context/ProductsContext/useProductsContext';

export default function ProductList() {
	const { products } = useProductsContext();

	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Filter />
					<Sort />
				</div>

				<h2 className="content__title">Все котлы</h2>

				<div className="content__items">
					{products.map((product, index) => {
						return <ProductCard key={product.id} {...product} />;
					})}
				</div>
			</div>
		</div>
	);
}
