import React, { useState } from 'react';
import { useProductsContext } from '../context/ProductsContext/useProductsContext';

export default function Filter() {
	const [currentCategory, setCurrentCategory] = useState('Все');
	const { categories } = useProductsContext();

	return (
		<div className="categories">
			<ul>
				{categories.map((cat, i) => {
					let catActive = cat.name === currentCategory ? 'active' : '';
					return (
						<li className={catActive} key={i}>
							{cat.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
