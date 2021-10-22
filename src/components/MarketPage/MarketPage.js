import React from 'react';
// import { connect } from 'react-redux';
import UserGreeting from './../Users/UserGreeting'

const MarketPage = (props) => {
	// const { market_name } = props;

	// fetchMarketInfo(market_name);

	return (
		<div>
			<UserGreeting />
			<h2>Welcome to Market Page</h2>
		</div>
	)
};

// const mapStateToProps = state => {
// 	return ({
// 		...state
// 	})
// }

export default /* connect(mapStateToProps) */ 
MarketPage;