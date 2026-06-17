import { useState, useEffect } from 'react';
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCategory } from '../redux/slices/productsSlice';

export default function Filter() {
	const { products, currentCategory } = useSelector((state: RootState) => state.productsReducer);
	const dispatch = useDispatch();

	const categories = ['Все', ...new Set(products.map((prod) => prod.category))];

	return (
		<div className="categories">
			<ul>
				{categories.map((cat, i) => {
					let catActive = cat === currentCategory ? 'active' : '';
					return (
						<li
							className={catActive}
							key={i}
							onClick={() => dispatch(setCurrentCategory(cat))}>
							{cat}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
