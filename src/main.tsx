import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ProductsProvider from './context/ProductsContext/ProductsContext';

import './styles/app.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ProductsProvider>
			<App />
		</ProductsProvider>
	</StrictMode>,
);
