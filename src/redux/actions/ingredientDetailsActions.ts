import {
	SET_INGREDIENT_DETAILS,
} from './__types'

import {
	ISetIngredientDetails,
} from '../../types/actions_types'

import { TIngredient } from '../../types/types'

// Для отображения ДАННЫХ ИНГРЕДИЕНТА

export const setIngredientDetails = (obj: TIngredient) : ISetIngredientDetails => {
	return { type: SET_INGREDIENT_DETAILS, payload: obj }
} 