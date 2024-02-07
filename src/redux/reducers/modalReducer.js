import { 
	SET_INGREDIENT_DETAILS,
	SET_ORDER_DETAILS,

	ADD_INGREDIENT,
	DELETE_INGREDIENT,
} from '../actions/actions'


const initialState = {
	ingredientDetails: null,
	orderDetails: null,

	addedIngredients: [],
};


export const modalReducer = ( state = initialState, action ) => {

	switch( action.type ) 
	{


		// Экшены для работы с МОДАЛЬНЫМ окном
		case SET_INGREDIENT_DETAILS: 

			console.log(state)

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


		// Экшены для работы с КОНСТРУКТОРОМ заказа
		case ADD_INGREDIENT: 

			if ( action.payload.type === 'bun' ) 
			{
				alert(1)
			}

			return {
				...state,
				addedIngredients: [ ...state.addedIngredients, action.payload ]
			}

		case DELETE_INGREDIENT: 
			return {
				...state,
				addedIngredients: [ ...state.addedIngredients.filter( ingredient => ingredient.id !== action.payload ) ]
			}

		// Экшен по дефолту
		default: 
			return state;

	}
	
};