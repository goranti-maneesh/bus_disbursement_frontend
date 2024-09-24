import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>Bus Disbursement App</h1>
			<ul>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/buses">Buses</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
