import { 
	GET_INGREDIENTS_REQUEST, 
	GET_INGREDIENTS_SUCCESS, 
	GET_INGREDIENTS_FAILED,

} from '../actions/actions'


const initialState = {
	buns: [],
	ingredients: [],
	isLoading: false,
	error: undefined,
};


export const ingredientsReducer = ( state = initialState, action ) => {

	switch( action.type ) 
	{


		// Экшены для подгрузки списка ИНГРЕДИЕНТОВ
		case GET_INGREDIENTS_REQUEST:
			return {
				...state,
				isLoading: true,
			}
			

		case GET_INGREDIENTS_SUCCESS:
			return {
				...state,
				ingredients: action.payload,
				isLoading: false,
			}

		case GET_INGREDIENTS_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			} 
		

		// Экшен по дефолту
		default: 
			return state;

	}
	
};