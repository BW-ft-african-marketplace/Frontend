import React from 'react';
import { connect } from 'react-redux';
import UserGreeting from './../Users/UserGreeting'

const MarketPage = (props) => {
	const { market_name } = props;

	fetchMarketInfo(market_id);

	return (
		<div>
			<UserGreeting />
			<h2>Welcome to Market Page</h2>
		</div>
	)
};

const mapStateToProps = state => {
	return ({
		market_name: state.user.market_name
	})
}

export default connect(mapStateToProps)(MarketPage);