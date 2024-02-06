import { v4 as uuid } from 'uuid';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const SET_INGREDIENT_DETAILS = 'SET_INGREDIENT_DETAILS';
export const SET_ORDER_DETAILS = 'SET_ORDER_DETAILS';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';


// Action-Creators

export const getIngredientsRequest = () => {
	return { type: GET_INGREDIENTS_REQUEST }
} 

export const getIngredientsSuccess = (ingredients) => {
	return { type: GET_INGREDIENTS_SUCCESS, payload: ingredients }
} 

export const getIngredientsFailed = (err) => {
	return { type: GET_INGREDIENTS_FAILED, payload: err }
} 

/* *** */

export const setIngredientDetails = (id) => {
	return { type: SET_INGREDIENT_DETAILS, payload: id }
} 

export const setOrderDetails = (value) => {
	return { type: SET_ORDER_DETAILS, payload: value }
} 

/* *** */

export const addIngredient = (ingredient) => {
	return { type: ADD_INGREDIENT, payload: { ...ingredient, id: uuid() } } 
} 

export const deleteIngredient = (id) => {
	return { type: DELETE_INGREDIENT, payload: id } 
} 

