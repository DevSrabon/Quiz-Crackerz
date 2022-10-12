import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Question = ({ data }) => {
	const { question, options, correctAnswer } = data;
	// console.log(typeof correctAnswer, )
	const handleClick = (id) =>{
		if (correctAnswer === id) {
			toast.success("Answer is correct!", { autoClose: 2000 })
		}
		else {
			toast.error('Wrong Answer!', { autoClose: 2000 });
		}
	}
	
	return (
		<div className="container text-center bg-light shadow-lg my-5">
			<h2>{question}</h2>
			<div className="d-flex  gap-5">
				<div className="col gap-4">
					<div className="p-3 bg-info rounded my-4">
						<label
							className="d-flex justify-content-center gap-1 fs-6 ms-2"
							for={options[0]}
						>
							<input
								onClick={() => handleClick(options[0])}
								type="radio"
								id={options[0]}
								name="age"
								value="30"
							/>
							<ToastContainer
								position="top-center"
								autoClose={2000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="light"
							/>
							{options[0]}
						</label>
					</div>
					<div className="p-3 bg-info rounded my-4">
						<div>
							<label
								className="d-flex justify-content-center gap-1 fs-6 ms-2"
								for={options[1]}
							>
								<input
									onClick={() => handleClick(options[1])}
									type="radio"
									id={options[1]}
									name="age"
									value="40"
								/>
								{options[1]}
							</label>
						</div>
					</div>
				</div>
				<div className="col gap-4">
					<div className="p-3 bg-info rounded my-4">
						<label
							className="d-flex justify-content-center gap-1 fs-6 ms-2"
							for={options[2]}
						>
							<input
								onClick={() => handleClick(options[2])}
								type="radio"
								id={options[2]}
								name="age"
								value="50"
							/>
							{options[2]}
						</label>
					</div>
					<div className="p-3 bg-info rounded ">
						<div>
							<label
								className="d-flex justify-content-center gap-1 fs-6 ms-2"
								for={options[3]}
							>
								<input
									onClick={() => handleClick(options[3])}
									type="radio"
									id={options[3]}
									name="age"
									value="60"
								/>
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
