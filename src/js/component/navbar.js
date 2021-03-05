import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">4GeeksAcademy</span>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-primary">Login</button>
			</div>
		</nav>
	);
};
