import {
	SET_ORDER_DETAILS,
} from './types'

// Для отображения ДАННЫХ ЗАКАЗА

export const setOrderDetails = (obj) => {
	return { type: SET_ORDER_DETAILS, payload: obj }
} 