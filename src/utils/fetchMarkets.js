import { connect } from 'react-redux';
import axiosWithAuth from './axiosWithAuth';

function fetchMarkets(props) {
	return axiosWithAuth.get('https://web46unit4buildweek.herokuapp.com/api/markets')
		.then(response => {
			console.log("response inside fetchMarkets: ", response);
		})
		.catch(error => {
			console.log(error);
		});
};

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps)(fetchMarkets);
