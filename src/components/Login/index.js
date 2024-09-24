import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import { BookingContext } from "../../context/context";

import "./index.css";

const Login = () => {
	const [studentID, setStudentID] = useState("");
	const [password, setPassword] = useState("");
	const { setStudentData } = useContext(BookingContext);
	const history = useHistory();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch(
				"https://bus-disbursement-backend-1.onrender.com/api/login",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ studentID, password }),
				}
			);
			const data = await res.json();
			if (res.ok) {
				setStudentData({
					studentID: data.user.studentID,
					name: data.user.name,
					destination: data.user.destination,
				});
				Cookies.set(data.token, "jwtToken", { expires: 1 });
				history.push("/buses");
			} else {
				alert(data.msg);
			}
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	return (
		<div className="login-container">
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="Student ID"
					value={studentID}
					onChange={(e) => setStudentID(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
