import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-light ">
			<div class="container d-flex justify-content-between">
				<h2 class="navbar-brand text-info">Quiz Games</h2>

				<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<Link to="/" className="nav-link">
								Topics
							</Link>
						</li>
						<li class="nav-item">
							<Link to="/statistics" className="nav-link">
								Statistics
							</Link>
						</li>
						<li class="nav-item">
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
