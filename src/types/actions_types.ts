import { TIngredient, TUser, TOrderResults } from './types'

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
	SET_USER_EMAIL,
	SET_USER_PASSWORD,


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

/**************************************/

export interface IAddIngredientConstructor {
	readonly type: typeof ADD_INGREDIENT_CONSTRUCTOR;
	readonly payload: any;
}

export interface IDeleteIngredientConstructor {
	readonly type: typeof DELETE_INGREDIENT_CONSTRUCTOR;
	readonly payload: number;
}

export interface IChangeIngredientsConstructor {
	readonly type: typeof CHANGE_INGREDIENTS_CONSTRUCTOR;
	readonly payload: any;
}

/**************************************/

export interface IGetOrderDataRequest {
	readonly type: typeof GET_ORDER_DATA_REQUEST;
}

export interface IGetOrderDataSuccess {
	readonly type: typeof GET_ORDER_DATA_SUCCESS;
	readonly payload: any;
}

export interface IGetOrderDataFailed {
	readonly type: typeof GET_ORDER_DATA_FAILED;
	readonly payload: string;
}

export interface ISetOrderDetails {
	readonly type: typeof SET_ORDER_DETAILS;
	readonly payload: TOrderResults | null;
}

/**************************************/

export interface IUserRegistrationRequest {
	readonly type: typeof USER_REGISTRATION_REQUEST;
}

export interface IUserRegistrationSuccess {
	readonly type: typeof USER_REGISTRATION_SUCCESS;
	readonly payload: any;
}

export interface IUserRegistrationFailed {
	readonly type: typeof USER_REGISTRATION_FAILED;
	readonly payload: any;
}

/**************************************/

export interface ISetUserAuthRequest {
	readonly type: typeof USER_AUTH_REQUEST;
	readonly payload: boolean;
}

export interface ISetUserAuthSuccess {
	readonly type: typeof USER_AUTH_SUCCESS;
}

export interface ISetUserAuthFailed {
	readonly type: typeof USER_AUTH_FAILED;
	readonly payload: string;
}

/**************************************/

export interface ISetUser {
	readonly type: typeof SET_USER;
	readonly payload: TUser;
}

export interface ISetUserName {
	readonly type: typeof SET_USER_NAME;
	readonly payload: string;
}

export interface ISetUserEmail {
	readonly type: typeof SET_USER_EMAIL;
	readonly payload: string;
}

export interface ISetUserPassword {
	readonly type: typeof SET_USER_PASSWORD;
	readonly payload: string;
}




// Union types
export type TAllActions = IGetIngredientsRequest 
							| IGetIngredientsSuccess 
							| IGetIngredientsFailed 

							| ISetIngredientDetails 
							
							| IAddIngredientConstructor
							| IDeleteIngredientConstructor
							| IChangeIngredientsConstructor

							| IGetOrderDataRequest
							| IGetOrderDataSuccess
							| IGetOrderDataFailed
							| ISetOrderDetails

							| IUserRegistrationRequest
							| IUserRegistrationSuccess
							| IUserRegistrationFailed

							| ISetUserAuthRequest
							| ISetUserAuthSuccess
							| ISetUserAuthFailed

							| ISetUser
							| ISetUserName
							| ISetUserEmail
							| ISetUserPassword



