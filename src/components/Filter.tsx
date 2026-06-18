import { useEffect } from 'react';
import type { RootState } from '../redux/store';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setCurrentCategory } from '../redux/slices/productsSlice';
import { fetchCategories } from '../redux/slices/categoriesThunk.ts';

export default function Filter() {
	const { currentCategory } = useAppSelector((state: RootState) => state.productsReducer);
	const { categories } = useAppSelector((state: RootState) => state.categoriesReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	// console.log(currentCategory);
	// console.log(categories);

	return (
		<div className="categories">
			<ul>
				{categories.map((cat, i) => {
					let catActive =
						cat.name === currentCategory ||
						(cat.name === 'Все' && currentCategory === '')
							? 'active'
							: '';
					return (
						<li
							className={catActive}
							key={i}
							onClick={() => dispatch(setCurrentCategory(cat.name))}>
							{cat.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
