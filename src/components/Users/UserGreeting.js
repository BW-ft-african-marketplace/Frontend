import React from "react";
import { connect } from "react-redux";


const UserGreeting = (props) => {
	return (
		<div>
			<h1>Hello, {props.username}</h1> 
		</div>
	)
};

const mapStateToProps = state => {
	return {
		username: state.user.username
	}
}

export default connect(mapStateToProps)(UserGreeting);
