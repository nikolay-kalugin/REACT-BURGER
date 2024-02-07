import { combineReducers } from 'redux';
import { ingredientsReducer }  from '../reducers/ingredientsReducer';
import { modalReducer }  from '../reducers/modalReducer';

 const rootReducer = combineReducers({
	ingredientsReducer, 
	modalReducer,
  });

export default rootReducer;

// import { 
// 	GET_INGREDIENTS_REQUEST, 
// 	GET_INGREDIENTS_SUCCESS, 
// 	GET_INGREDIENTS_FAILED,

// 	SET_INGREDIENT_DETAILS,
// 	SET_ORDER_DETAILS,

// 	ADD_INGREDIENT,
// 	DELETE_INGREDIENT,
// } from '../actions/actions'


// const initialState = {
// 	buns: [],
// 	ingredients: [],
// 	isLoading: false,
// 	error: undefined,

// 	addedIngredients: [],

// 	ingredientDetails: null,
// 	orderDetails: null,


// };


// export const mainReducer = ( state = initialState, action ) => {

// 	switch( action.type ) 
// 	{


// 		// Экшены для подгрузки списка ИНГРЕДИЕНТОВ
// 		case GET_INGREDIENTS_REQUEST:
// 			return {
// 				...state,
// 				isLoading: true,
// 			}
			

// 		case GET_INGREDIENTS_SUCCESS:
// 			return {
// 				...state,
// 				ingredients: action.payload,
// 				isLoading: false,
// 			}

// 		case GET_INGREDIENTS_FAILED:
// 			return {
// 				...state,
// 				isLoading: false,
// 				error: action.payload,
// 			} 
		
// 		// Экшены для работы с МОДАЛЬНЫМ окном
// 		case SET_INGREDIENT_DETAILS: 

// 			const [ingredientObj] = state.ingredients.filter( obj => obj._id === action.payload );

// 			return {
// 				...state,
// 				ingredientDetails: ingredientObj
// 			}

// 		case SET_ORDER_DETAILS: 
// 			return {
// 				...state,
// 				orderDetails: action.payload
// 			}

// 		// Экшены для работы с КОНСТРУКТОРОМ заказа
// 		case ADD_INGREDIENT: 

// 			if ( action.payload.type === 'bun' ) 
// 			{
// 				alert(1)
// 			}

// 			return {
// 				...state,
// 				addedIngredients: [ ...state.addedIngredients, action.payload ]
// 			}

// 		case DELETE_INGREDIENT: 
// 			return {
// 				...state,
// 				addedIngredients: [ ...state.addedIngredients.filter( ingredient => ingredient.id !== action.payload ) ]
// 			}

// 		// Экшен по дефолту
// 		default: 
// 			return state;

// 	}
	
// };