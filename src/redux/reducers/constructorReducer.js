import { 
	ADD_INGREDIENT_CONSTRUCTOR,
	DELETE_INGREDIENT_CONSTRUCTOR,
	CHANGE_INGREDIENTS_CONSTRUCTOR,

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

				// let newArr = []

				// // Проверка есть ли уже в конструкторе булка
				// if ( state.addedIngredients.filter( item => item.type === 'bun' ).length > 0 )
				// {
					
				// 	newArr = state.addedIngredients
				// 				.splice(0, 1, action.payload)
				// 				.splice((newArr.length-1), 1, action.payload) 
					
				// }
				// else
				// {
				// 	newArr = [ action.payload, ...state.addedIngredients, action.payload ]
				// }

				return {
					...state,
					bun: action.payload,
					// addedIngredients: newArr
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

		
		case CHANGE_INGREDIENTS_CONSTRUCTOR: 

			// console.log( 'dragObjIndex', action.payload.dragObjIndex)
			// console.log( 'dropObjIndex', action.payload.dropObjIndex)

			const dragCard = state.addedIngredients[action.payload.dragObjIndex]
			const newAddedIngredients = [...state.addedIngredients]
			newAddedIngredients.splice( action.payload.dragObjIndex, 1 )
			newAddedIngredients.splice( action.payload.dropObjIndex, 0, dragCard )

			return {
				...state,
				addedIngredients: newAddedIngredients
			}


			

		// Экшен по дефолту
		default: 
			return state;

	}
	
};