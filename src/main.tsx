import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import App from './App.tsx';

import './styles/app.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
