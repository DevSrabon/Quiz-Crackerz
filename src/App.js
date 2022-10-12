import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Questions from './components/Questions/Questions';
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
					path: '/quiz/:quizId',
					loader: async ({ params }) => {
						return fetch(
							`https://openapi.programming-hero.com/api/quiz/${params.quizId}`
						);
					},
					element: <Questions></Questions>,
				},
				{
					path: '/statistics',
					loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
					element: <Statistics></Statistics>,
				},
				{
					path: '/blog',
					element: <Blog></Blog>,
				},
			],
		},
		{ path: '*', element: <h2 className='text-danger my-5'>404 not found.</h2> },
	]);
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
