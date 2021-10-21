import axios from 'axios';
import { connect } from 'react-redux';

const axiosWithAuth = (props) => {
	const token = props.token;

	return (
		axios.create({
			baseURL: 'https://web46unit4buildweek.herokuapp.com/', 
			headers: {
				authorization: token
			}
	}));
}

const mapStateToProps = state => {
	return ({
		token: state.token
	})
}

export default connect(mapStateToProps)(axiosWithAuth);