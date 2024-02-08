import { 
	ADD_INGREDIENT_CONSTRUCTOR,
	DELETE_INGREDIENT_CONSTRUCTOR,
} from '../actions/types'


const initialState = {
	bun: null,
	addedIngredients: [],
};


export const constructorReducer = ( state = initialState, action ) => {

	switch( action.type ) 
	{

		// Экшены для работы с КОНСТРУКТОРОМ заказа
		case ADD_INGREDIENT_CONSTRUCTOR: 

			if ( action.payload.type === 'bun' ) 
			{
				return {
					...state,
					bun: action.payload
				}
			}

			return {
				...state,
				addedIngredients: [ ...state.addedIngredients, action.payload ]
			}

		case DELETE_INGREDIENT_CONSTRUCTOR: 
			return {
				...state,
				addedIngredients: [ ...state.addedIngredients.filter( ingredient => ingredient.id !== action.payload ) ]
			}

		// Экшен по дефолту
		default: 
			return state;

	}
	
};