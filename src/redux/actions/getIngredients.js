import { getIngredientRequest, getIngredientSuccess, getIngredientFailed } from './actions'

import getIngredientsApi from '../../services/getApiData'

export const getIngredients = 
	() => 
		async (dispatch) => {
	
			dispatch( getIngredientRequest );

			try 
			{
				const ingredients = await getIngredientsApi();
				dispatch( getIngredientSuccess(ingredients) );
			} 
			catch(err) 
			{
				dispatch( getIngredientFailed(err) );
			}

		};


