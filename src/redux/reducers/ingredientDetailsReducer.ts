import { 
	SET_INGREDIENT_DETAILS,
} from '../actions/__types'


import { TAllActions } from '../../types/actions_types' 

const initialState = {
	ingredientDetails: null,
};


export const ingredientDetailsReducer = ( state = initialState, action: TAllActions ) => {

	switch( action.type ) 
	{
		// Экшены для работы с ДАННЫМИ ИНГРЕДИЕНТА
		case SET_INGREDIENT_DETAILS: 
			return {
				...state,
				ingredientDetails: action.payload
			}


		// Экшен по дефолту
		default: 
			return state;

	}
	
};