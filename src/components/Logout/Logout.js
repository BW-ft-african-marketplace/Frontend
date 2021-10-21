import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
	// This component deletes the token and username from localStorage, 
	// and redirects to homepage.
	useEffect(() => {
		localStorage.removeItem("token");
		localStorage.removeItem("username");

		<Redirect to="/home"/>;
	}, []);

	return (<div></div>);
}

export default Logout;
