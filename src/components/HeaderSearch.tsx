import { useState, useEffect } from 'react';
import type { RootState } from '../redux/store';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setSearchValue } from '../redux/slices/productsSlice';
import { useDebounce } from '../hooks/useDebounce';

export default function HeaderSearch() {
	const dispatch = useAppDispatch();
	const { searchValue } = useAppSelector((state: RootState) => state.productsReducer);

	const [inputValue, setInputValue] = useState(searchValue);
	useEffect(() => {
		// eslint-disable-next-line
		setInputValue(searchValue);
	}, [searchValue]);

	let searchValueDebounce = useDebounce(inputValue, 300);

	useEffect(() => {
		dispatch(setSearchValue(searchValueDebounce));
	}, [dispatch, searchValueDebounce]);

	return (
		<div className="header__search">
			<input
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
				type="text"
				placeholder="Поиск..."
			/>
			{inputValue && (
				<button type="button" onClick={() => setInputValue('')} className="search-clear">
					<span>x</span>
				</button>
			)}
		</div>
	);
}
