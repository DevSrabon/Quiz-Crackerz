import React from 'react';

const Carts = ({ topic }) => {
	const { name, logo } = topic;
	return (
		<div classNameName="col">
			<div className="card h-100 w-80 ">
				<img className='bg-secondary' src={logo} alt="" />

				<div className="card-body d-flex align-items-center justify-content-between">
					<h5 className="card-title"> {name}</h5>
					<button className="btn btn-secondary">Start Quiz</button>
				</div>
			</div>
		</div>
	);
};

export default Carts;
