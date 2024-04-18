import { v4 as uuid } from 'uuid';

import {
	ADD_INGREDIENT_CONSTRUCTOR,
	DELETE_INGREDIENT_CONSTRUCTOR,
	CHANGE_INGREDIENTS_CONSTRUCTOR,

} from './__types'

import {
	IAddIngredientConstructor,
	IDeleteIngredientConstructor,
	IChangeIngredientsConstructor,
} from '../../types/actions_types'

import { TIngredient } from '../../types/types'

// Для работы с КОНСТРУКТОРОМ

export const addIngredientConstructor = (ingredient: TIngredient) : IAddIngredientConstructor => {
	return { 	
				type: ADD_INGREDIENT_CONSTRUCTOR, 
				payload: { ...ingredient, id: uuid() } 
			} 
} 

export const deleteIngredientConstructor = (id: number) : IDeleteIngredientConstructor => {
	return { type: DELETE_INGREDIENT_CONSTRUCTOR, payload: id } 
} 


export const changeIngredientsConstructor = (dragObjIndex: any, dropObjIndex: any) : IChangeIngredientsConstructor => {
	return { type: CHANGE_INGREDIENTS_CONSTRUCTOR, payload: {dragObjIndex, dropObjIndex} } 
} 
