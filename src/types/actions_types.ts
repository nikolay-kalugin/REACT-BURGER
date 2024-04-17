import { TIngredient } from './types'

import {
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAILED,

	SET_INGREDIENT_DETAILS,

	ADD_INGREDIENT_CONSTRUCTOR,
	DELETE_INGREDIENT_CONSTRUCTOR,
	CHANGE_INGREDIENTS_CONSTRUCTOR,

	GET_ORDER_DATA_REQUEST,
	GET_ORDER_DATA_SUCCESS,
	GET_ORDER_DATA_FAILED,
	SET_ORDER_DETAILS,

	USER_REGISTRATION_REQUEST,
	USER_REGISTRATION_SUCCESS,
	USER_REGISTRATION_FAILED,

	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	USER_AUTH_FAILED,

	SET_USER,
	SET_USER_NAME,


} from '../redux/actions/__types'


export interface IGetIngredientsRequest {
	readonly type: typeof GET_INGREDIENTS_REQUEST; 
}

export interface IGetIngredientsSuccess {
	readonly type: typeof GET_INGREDIENTS_SUCCESS;
	readonly payload: TIngredient[];
}

export interface IGetIngredientsFailed {
	readonly type: typeof GET_INGREDIENTS_FAILED;
	readonly payload: string;
}

/**************************************/

export interface ISetIngredientDetails {
	readonly type: typeof SET_INGREDIENT_DETAILS;
	readonly payload: TIngredient;
}




// Объединяем в Unions
export type TGetIngredients = IGetIngredientsRequest | IGetIngredientsSuccess | IGetIngredientsFailed

