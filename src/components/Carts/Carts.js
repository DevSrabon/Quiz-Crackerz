import React from 'react';
import { Link } from 'react-router-dom';
const Carts = ({ topic }) => {
	const { name, logo } = topic;
	const handleClick = () => {
		console.log('click');
	}
	return (
		<div className="col">
			<div className="card h-100 w-80 ">
				<img className='bg-secondary' src={logo} alt="" />
				<div className="card-body d-flex align-items-center justify-content-between">
					<h5 className="card-title"> {name}</h5>
                    <Link to=''>hi</Link>
					<button onClick={()=>handleClick()} className="btn btn-secondary">Start Quiz</button>
				</div>
			</div>
		</div>
	);
};

export default Carts;
