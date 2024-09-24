import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import Navbar from "../Navbar";

import { BookingContext } from "../../context/context";

import "./index.css";

const Booking = () => {
	const { studentData, busData } = useContext(BookingContext);
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	// useEffect(() => {
	// 	const fetchBusDetails = async () => {
	// 		try {
	// 			const options = {
	// 				method: "POST",
	// 				headers: { "Content-Type": "application/json" },
	// 				body: JSON.stringify({
	// 					busID: busData.busID,
	// 					studentID: studentData.studentID,
	// 					studentName: studentData.name,
	// 					destination: busData.destination,
	// 					busTiming: busData.timing,
	// 				}),
	// 			};
	// 			const res = await fetch(
	// 				`http://localhost:3001/api/book`,
	// 				options
	// 			);
	// 			const data = await res.json();
	// 			alert("Seat booked successfully");
	// 			history.push("/buses");
	// 			setLoading(false);
	// 		} catch (error) {
	// 			console.error("Error fetching bus details:", error);
	// 			alert("Failed to book seat");
	// 		}
	// 	};
	// 	fetchBusDetails();
	// }, [busID]);

	const handleBooking = async () => {
		try {
			const options = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					busID: busData.busID,
					studentID: studentData.studentID,
					studentName: studentData.name,
					destination: busData.destination,
					busTiming: busData.timing,
				}),
			};
			console.log(options);
			const res = await fetch(`http://localhost:3001/api/book`, options);
			const data = await res.json();
			alert("Seat booked successfully");
			history.push("/buses");
			setLoading(false);
		} catch (error) {
			console.error("Error fetching bus details:", error);
			alert("Failed to book seat");
		}
	};

	// if (loading) {
	// 	return <div>Loading bus details...</div>;
	// }

	console.log(studentData, busData);
	return (
		<div>
			<Navbar />
			<div className="booking-container">
				<h2>
					Booking for {busData.destination} at {busData.timing}
				</h2>
				<p>Name: {studentData.name}</p>
				<p>ID: {studentData.studentID}</p>
				<p>Bus ID: {busData.busID}</p>
				<p>Seats Available: {busData.seatsAvailable}</p>
				<button onClick={handleBooking}>Confirm Booking</button>
			</div>
		</div>
	);
};

export default Booking;
