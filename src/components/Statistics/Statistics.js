import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
	BarChart,
	Bar,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';


const Statistics = () => {
	const quiz = useLoaderData();
	const quizData = quiz.data;
	return (
		<div className="mx-auto w-25 mt-5">
			<BarChart width={350} height={390} data={quizData}>
				<Bar dataKey="total" fill="#8884d8" />
				<XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
				<YAxis />
				<Tooltip />
			</BarChart>
			
		</div>
	);
};
export default Statistics;
