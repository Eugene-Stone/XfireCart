import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home';
import Cart from './pages/Cart';

function Layout() {
	return (
		<div className="wrapper">
			<Header />
			<Outlet />
		</div>
	);
}

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			errorElement: <NotFoundPage />,
			children: [
				{ index: true, element: <Home /> },
				{ path: 'cart', element: <Cart /> },
				{ path: '*', element: <NotFoundPage /> },
			],
		},
	],
	{ basename: '/XfireCart' },
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
