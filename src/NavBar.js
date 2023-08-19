import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<div className="nav">
			<div className="nav-center">
				<Link to="/" className="nav-link" > Home </Link>
				<Link to="/view" className="nav-link" > View </Link>
				</div>
			</div>
		</>
	);
}