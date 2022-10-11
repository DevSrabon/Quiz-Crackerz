import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light ">
			<div className="container d-flex justify-content-between">
				<h2 className="navbar-brand text-info">Quiz Games</h2>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Topics
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/statistics" className="nav-link">
								Statistics
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link">
								Blog
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		
	);
};

export default Header;
