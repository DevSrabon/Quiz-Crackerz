import React from 'react';
import { Link } from 'react-router-dom';
const Carts = ({ topic }) => {
	const {id, name, logo } = topic;

	return (
		<div className="col"> 
			<div className="card h-100 w-80 ">
				<img className="bg-secondary" src={logo} alt="" />
				<div className="card-body d-flex align-items-center justify-content-between">
					<h5 className="card-title"> {name}</h5>
					<Link to={`/quiz/${id}`}>
						<button className="btn btn-secondary">Start Quiz</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Carts;
