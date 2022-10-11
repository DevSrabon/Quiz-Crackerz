import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main></Main>,
			children: [
				{
					path: '/',
					loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
					element: <Topics></Topics>,
				},
				{
					path: '/'
				},
				{
					path: '/statistics',
					element: <Statistics></Statistics>,
				},
				{
					path: '/blog',
					element: <Blog></Blog>,
				},
			],
		},
    
	]);
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
