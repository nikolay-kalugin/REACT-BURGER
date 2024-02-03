import { 
	GET_INGREDIENTS_REQUEST, 
	GET_INGREDIENTS_SUCCESS, 
	GET_INGREDIENTS_FAILED } from '../actions/getIngredients'

export const rootReducer = (state, action) => {
	switch( action.type ) 
	{
		case GET_INGREDIENTS_REQUEST:
			return state;
			

		case GET_INGREDIENTS_SUCCESS:

			return {
				...state,
				ingredients: action.payload,
			};

		case GET_INGREDIENTS_FAILED:
			return state;
	
		default: 
			return state;
	}
};