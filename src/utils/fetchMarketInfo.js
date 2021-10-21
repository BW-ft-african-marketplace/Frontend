import axiosWithAuth from './axiosWithAuth';

function fetchMarketInfo(market_id) {
	axiosWithAuth.get('https://web46unit4buildweek.herokuapp.com/')
}

export default fetchMarketInfo;