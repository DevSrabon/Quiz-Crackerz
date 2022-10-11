import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carts from '../Carts/Carts';
const Topics = () => {
    const topics = useLoaderData();
    const topicsData = topics.data
    
    return (
			<div className='container mt-5'>
				<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 container">
					{topicsData.map((topic) => (
						<Carts key={topic.id} topic={topic}></Carts>
					))}
				</div>
			</div>
		);
};

export default Topics;