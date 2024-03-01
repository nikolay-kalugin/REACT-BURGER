import {
	SET_INGREDIENT_DETAILS,
} from './__types'

// Для отображения ДАННЫХ ИНГРЕДИЕНТА

export const setIngredientDetails = (obj) => {
	return { type: SET_INGREDIENT_DETAILS, payload: obj }
} 