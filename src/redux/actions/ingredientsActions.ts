import {
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAILED,
} from './__types'

import {
	IGetIngredientsRequest,
	IGetIngredientsSuccess,
	IGetIngredientsFailed
} from '../../types/actions_types'

import { TIngredient } from '../../types/types'

// Для подгрузки ИНГРЕДИЕНТОВ

export const getIngredientsRequest = () : IGetIngredientsRequest => {
	return { type: GET_INGREDIENTS_REQUEST }
} 

export const getIngredientsSuccess = (ingredients: TIngredient[] ) : IGetIngredientsSuccess => {
	return { type: GET_INGREDIENTS_SUCCESS, payload: ingredients }
} 

export const getIngredientsFailed = (err: string) : IGetIngredientsFailed => {
	return { type: GET_INGREDIENTS_FAILED, payload: err }
} 