import React from "react";
import { useParams } from "react-router-dom";

const UserGreeting = () => {
	const { id } = useParams();

	// Need to:
	// get user info from store: based on id, or based on info saved in store
	// Display greeting to 'username'
	// display market page
	// maybe put this component in the market page component

	return (
		<div>
			<h1>Welcome to User Page</h1> 
		</div>
	)
};

export default UserGreeting;
