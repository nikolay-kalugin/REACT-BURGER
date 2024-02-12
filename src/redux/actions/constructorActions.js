import { v4 as uuid } from 'uuid';

import {
	ADD_INGREDIENT_CONSTRUCTOR,
	DELETE_INGREDIENT_CONSTRUCTOR,
	CHANGE_INGREDIENTS_CONSTRUCTOR,

} from './types'

// Для работы с КОНСТРУКТОРОМ

export const addIngredientConstructor = (ingredient) => {
	return { 	
				type: ADD_INGREDIENT_CONSTRUCTOR, 
				payload: { ...ingredient, id: uuid() } 
			} 
} 

export const deleteIngredientConstructor = (id) => {
	return { type: DELETE_INGREDIENT_CONSTRUCTOR, payload: id } 
} 


export const changeIngredientsConstructor = (dragObjIndex, dropObjIndex) => {
	return { type: CHANGE_INGREDIENTS_CONSTRUCTOR, payload: {dragObjIndex, dropObjIndex} } 
} 
