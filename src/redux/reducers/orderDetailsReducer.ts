import { 
	SET_ORDER_DETAILS,
	GET_ORDER_DATA_REQUEST,
	GET_ORDER_DATA_SUCCESS,
	GET_ORDER_DATA_FAILED,
} from '../actions/__types'

import { TAllActions } from '../../types/actions_types' 
import { TInitialStateOrderDetailsReducer } from '../../types/types' 

const initialState: TInitialStateOrderDetailsReducer = {
	orderDetails: null,
	isLoading: false,
	error: null,
};


export const orderDetailsReducer = ( state = initialState, action : TAllActions ) => {

	switch( action.type ) 
	{
		// Экшены для работы с ДАННЫМИ ЗАКАЗА
		case SET_ORDER_DETAILS: 
			return {
				...state,
				orderDetails: action.payload
			}

		
		// Экшены для подгрузки с бэка ИНФО ЗАКАЗА 
		case GET_ORDER_DATA_REQUEST:
			return {
				...state,
				isLoading: true,
			}
			

		case GET_ORDER_DATA_SUCCESS:
			return {
				...state,
				orderDetails: action.payload,
				isLoading: false,
			}

		case GET_ORDER_DATA_FAILED:
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