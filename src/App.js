import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import BusListing from "./components/BusListing";
import Booking from "./components/Booking";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route path="/login" exact component={Login} />
					<Route path="/buses" component={BusListing} />
					<Route path="/booking/:busID" component={Booking} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
