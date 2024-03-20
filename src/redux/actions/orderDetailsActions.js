import {
	SET_ORDER_DETAILS,
	GET_ORDER_DATA_REQUEST,
	GET_ORDER_DATA_SUCCESS,
	GET_ORDER_DATA_FAILED,
} from './__types'


// Для отображения ДАННЫХ ЗАКАЗА

export const setOrderDetails = (obj) => {
	return { type: SET_ORDER_DETAILS, payload: obj }
} 


// Для получения НОМЕРА ЗАКАЗА с бэка 

export const getOrderDataRequest = () => {
	return { type: GET_ORDER_DATA_REQUEST }
} 

export const getOrderDataSuccess = (order_data_obj) => {
	return { type: GET_ORDER_DATA_SUCCESS, payload: order_data_obj }
} 

export const getOrderDataFailed = (err) => {
	return { type: GET_ORDER_DATA_FAILED, payload: err }
} 