import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchProducts } from '../redux/slices/productsThunk.ts';

import ProductCard from './ProductCard';
import Filter from './Filter';
import Sort from './Sort';

export default function ProductList() {
	const dispatch = useAppDispatch();

	const { products, loading, errorData, currentCategory, searchValue, sortBy, sortOrder } =
		useAppSelector((state) => state.productsReducer);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch, currentCategory, searchValue, sortBy, sortOrder]);

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
