export const SET_TOKEN = "SET_TOKEN";
// export const SET_MARKETS = "SET_MARKETS";

export const setToken = (token) => {
	return ({type: SET_TOKEN, payload: token});
}

// export const setMarkets = (markets) => {
// 	return ({type: SET_MARKETS, payload: markets});
// };