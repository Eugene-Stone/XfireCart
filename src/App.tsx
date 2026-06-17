import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<ProductList />
		</div>
	);
}

export default App;
