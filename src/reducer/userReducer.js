import { SET_TOKEN } from "../actions/actions";
import { SET_USER } from "../actions/UserActions";

const initialState = {
	token: '',
	user: {
		user_id: '',
		username: '',
		market_Id: '',
	},
	markets: []
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: {
					user_id: action.payload.id,
					username: action.payload.username,
					market_Id: action.payload.market_Id,
				}
			}
		case SET_TOKEN: 
			return {
				...state,
				markets: action.payload.markets
			}
		default:
			return state;
	}
};

export default userReducer;