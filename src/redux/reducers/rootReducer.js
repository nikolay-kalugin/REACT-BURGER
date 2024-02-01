import { GET_INGREDIENTS_REQUEST , GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from '../actions/getIngredients'


const initialState = {
	bun: null,
	ingredients: [],
};

export const rootReducer = (state = initialState, action) => {
	switch( action.type ) 
	{
		case GET_INGREDIENTS_REQUEST:
			return {
				...state,
				ingredients: [ ...state.ingredients ]
			};

		case GET_INGREDIENTS_SUCCESS:
			return {
				...state,
				ingredients: [ ...state.ingredients, action.payload ]
			};

		case GET_INGREDIENTS_FAILED:
			return state;
	
		default: 
			return state;
	}
};