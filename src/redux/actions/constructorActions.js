import { v4 as uuid } from 'uuid';

import {
	ADD_INGREDIENT_CONSTRUCTOR,
	DELETE_INGREDIENT_CONSTRUCTOR,

} from './types'

// Для работы с КОНСТРУКТОРОМ

export const addIngredient = (ingredient) => {
	return { 	
				type: ADD_INGREDIENT_CONSTRUCTOR, 
				payload: { ...ingredient, id: uuid() } 
			} 
} 

export const deleteIngredient = (id) => {
	return { type: DELETE_INGREDIENT_CONSTRUCTOR, payload: id } 
} 