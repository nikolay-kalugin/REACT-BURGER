import { 
	SET_ORDER_DETAILS,
} from '../actions/types'


const initialState = {
	orderDetails: null,
};


export const orderDetailsReducer = ( state = initialState, action ) => {

	switch( action.type ) 
	{
		// Экшены для работы с ДАННЫМИ ЗАКАЗА
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