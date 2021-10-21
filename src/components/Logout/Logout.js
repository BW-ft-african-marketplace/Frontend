import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => {
	// This component deletes the token and username from localStorage, 
	// and redirects to homepage.

	// *** change to Redux from localStorage ***

	useEffect(() => {
		localStorage.removeItem("token");
		localStorage.removeItem("username");

		<Redirect to="/home"/>;
	}, []);

	return (<div></div>);
}

export default Logout;
