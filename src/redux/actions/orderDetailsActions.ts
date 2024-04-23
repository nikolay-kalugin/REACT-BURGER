import {
	GET_ORDER_DATA_REQUEST,
	GET_ORDER_DATA_SUCCESS,
	GET_ORDER_DATA_FAILED,
	SET_ORDER_DETAILS,
} from './__types'

import {
	IGetOrderDataRequest,
	IGetOrderDataSuccess,
	IGetOrderDataFailed,
	ISetOrderDetails,
} from '../../types/actions_types'


import { TOrderResults } from '../../types/types'

// Для получения НОМЕРА ЗАКАЗА с бэка 

export const getOrderDataRequest = () : IGetOrderDataRequest => {
	return { type: GET_ORDER_DATA_REQUEST }
} 

export const getOrderDataSuccess = (order_data_obj : any) : IGetOrderDataSuccess => {
	return { type: GET_ORDER_DATA_SUCCESS, payload: order_data_obj }
} 

export const getOrderDataFailed = (err: string) : IGetOrderDataFailed => {
	return { type: GET_ORDER_DATA_FAILED, payload: err }
} 


// Для отображения ДАННЫХ ЗАКАЗА

export const setOrderDetails = (obj: TOrderResults | null) : ISetOrderDetails => {
	return { type: SET_ORDER_DETAILS, payload: obj }
} 