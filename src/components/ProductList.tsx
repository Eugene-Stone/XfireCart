import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchProducts } from '../redux/slices/productsThunk.ts';
import { setPage } from '../redux/slices/productsSlice.ts';

// Fixed import ReactPaginate
import PacketPaginate from 'react-paginate';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactPaginate = (PacketPaginate as any).default || PacketPaginate;

import ProductCard from './ProductCard';
import Filter from './Filter';
import Sort from './Sort';

export default function ProductList() {
	const dispatch = useAppDispatch();

	const {
		products,
		loading,
		errorData,
		currentCategory,
		searchValue,
		sortBy,
		sortOrder,
		page,
		pages,
		items,
		first,
		prev,
		next,
		last,
	} = useAppSelector((state) => state.productsReducer);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch, currentCategory, searchValue, sortBy, sortOrder, page]);

	console.log(pages);
	console.log(
		'page',
		page,
		'pages',
		pages,
		'items',
		items,
		'first',
		first,
		'prev',
		prev,
		'next',
		next,
		'last',
		last,
	);

	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Filter />
					<Sort />
				</div>

				<h2 className="content__title">Все котлы</h2>

				<div className="content__items">
					{loading ? (
						<div>Loading</div>
					) : (
						products.map((product, index) => {
							return <ProductCard key={product.id} {...product} />;
						})
					)}
				</div>

				{pages > 1 && (
					<ReactPaginate
						breakLabel="..."
						nextLabel=">"
						onPageChange={(event: { selected: number }) => {
							dispatch(setPage(event.selected + 1));
						}}
						pageRangeDisplayed={items}
						pageCount={pages}
						previousLabel="<"
						renderOnZeroPageCount={null}
						// initialPage={page - 1} // Вместо этого
						forcePage={page - 1} // Синхронизируем внутренний стейт плагина с Redux
					/>
				)}
			</div>
		</div>
	);
}
