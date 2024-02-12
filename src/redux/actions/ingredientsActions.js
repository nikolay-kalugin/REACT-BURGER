import {

	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAILED,

} from './types'

// Для подгрузки ИНГРЕДИЕНТОВ

export const getIngredientsRequest = () => {
	return { type: GET_INGREDIENTS_REQUEST }
} 

export const getIngredientsSuccess = (ingredients) => {
	return { type: GET_INGREDIENTS_SUCCESS, payload: ingredients }
} 

export const getIngredientsFailed = (err) => {
	return { type: GET_INGREDIENTS_FAILED, payload: err }
} 