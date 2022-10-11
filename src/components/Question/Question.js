import React from 'react';

const Question = ({ data }) => {
	const { id, question, options, correctAnswer } = data;
	
	return (
		<div className="container text-center bg-light shadow-lg my-5">
			<h2>{question}</h2>
			<div className="d-flex  gap-5">
				<div className="col gap-4">
					<div className="p-3 bg-info rounded my-4">
						<label className="fs-5 ms-2" for={options[0]}>
							<input type="radio" id={options[0]} name="age" value="30" />
							{options[0]}
						</label>
					</div>
					<div className="p-3 bg-info rounded my-4">
						<div>
							<label className="fs-5 ms-2" for={options[1]}>
								<input type="radio" id={options[1]} name="age" value="40" />
								{options[1]}
							</label>
						</div>
					</div>
				</div>
				<div className="col gap-4">
					<div className="p-3 bg-info rounded my-4">
						<label className="fs-5 ms-2" for={options[2]}>
							<input type="radio" id={options[2]} name="age" value="50" />
							{options[2]}
						</label>
					</div>
					<div className="p-3 bg-info rounded ">
						<div>
							<label className="fs-5 ms-2" for={options[3]}>
								<input type="radio" id={options[3]} name="age" value="60" />
								{options[3]}
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Question;
