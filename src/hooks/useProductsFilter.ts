import { useState, useEffect } from 'react';
import request from '../api/request';

import type { Product } from '../types';

export default function useProductsFilter(products: Product[]) {
	const [categoryCurrent, setCategoryCurrent] = useState('');
	const [sortCurrent, setSortCurrent] = useState('');

	return {
		categoryCurrent,
		sortCurrent,
	};
}
