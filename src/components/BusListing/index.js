import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { BookingContext } from "../../context/context";

import "./index.css";
import Navbar from "../Navbar";

const BusListing = () => {
	const [buses, setBuses] = useState([]);
	const [loading, setLoading] = useState(true);
	const { setBusData, studentData } = useContext(BookingContext);
	const history = useHistory();

	useEffect(() => {
		const fetchBuses = async () => {
			try {
				const { destination } = studentData; // For example, use dynamic destination from user profile
				const res = await fetch(
					`https://bus-disbursement-backend-1.onrender.com/api/buses?destination=${destination}`
				);
				const data = await res.json();
				setBuses(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching buses:", error);
			}
		};
		fetchBuses();
	}, []);

	const onClickSelectedBus = (bus) => {
		setBusData(bus); // Store selected bus in context
		history.push(`/booking/${bus.busID}`);
	};

	if (loading) {
		return <div>Loading buses...</div>;
	}

	return (
		<div>
			<Navbar />
			<div className="bus-listing">
				<h2>Available Buses</h2>
				<ul>
					{buses.map((bus) => (
						<li key={bus.busID}>
							<div className="bus-info">
								<p>
									{bus.destination} - {bus.timing}
								</p>
								<p>Seats Available: {bus.seatsAvailable}</p>
								<button
									type="button"
									onClick={() => onClickSelectedBus(bus)}
								>
									Book Now
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BusListing;
