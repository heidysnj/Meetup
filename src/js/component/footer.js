import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Link to="/">
			<span className="navbar-brand mb-0 h1">4GeeksAcademy</span>
		</Link>
	</footer>
);
