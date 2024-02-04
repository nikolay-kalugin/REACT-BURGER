import { 
	GET_INGREDIENTS_REQUEST, 
	GET_INGREDIENTS_SUCCESS, 
	GET_INGREDIENTS_FAILED,

	SET_INGREDIENT_DETAILS,
	SET_ORDER_DETAILS,
} from '../actions/actions'


const initialState = {
	bun: null,
	ingredients: [],
	addedIngredients: [],

	ingredientDetails: null,
	orderDetails: null,

	isLoading: true,
	error: undefined,
};




export const rootReducer = (state = initialState, action) => {

	switch( action.type ) 
	{

		// Экшены для подгрузки ингредиентов
		case GET_INGREDIENTS_REQUEST:
			return state;
			

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
			} 


		
		// Экшены для работы с модальным окном
		case SET_INGREDIENT_DETAILS: 

			const [ingredientObj] = state.ingredients.filter( obj => obj._id === action.payload );

			return {
				...state,
				ingredientDetails: ingredientObj
			}

		case SET_ORDER_DETAILS: 
			return {
				...state,
				orderDetails: action.payload
			}

		// Экшен по дефолту
		default: 
			return state;
	}
	
};