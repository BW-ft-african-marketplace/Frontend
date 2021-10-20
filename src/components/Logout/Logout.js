import React, { useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Logout = (props) => {
	// There is no endpoint for logout at this time. 
	// For now this component will delete the token from localStorage, 
	// and redirect to homepage.
	useEffect(() => {
		axiosWithAuth()
			.post('/logout')
			.then(response => {
				localStorage.removeItem("token");

				props.history.push('/home');
			})
			.catch(error => {
				console.log(error);
			})
	}, []);

	return (<div></div>);
}

export default Logout;
