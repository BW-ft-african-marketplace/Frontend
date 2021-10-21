import { SET_USER } from "../actions/UserActions";

const initialState = {
	user: {
		user_id: '',
		username: '',
		market_name: '',
	},
	token: ''
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: {
					user_id: action.payload.id,
					username: action.payload.username,
					market_name: action.payload.market_name,
				}
			}
		default:
			return state;
	}
};

export default userReducer;