import { 
	GET_INGREDIENTS_REQUEST, 
	GET_INGREDIENTS_SUCCESS, 
	GET_INGREDIENTS_FAILED,
} from './actions'

import getIngredientsApi from '../../services/getApiData'

export const getIngredients = () => async (dispatch) => {
	
	dispatch({
	  type: GET_INGREDIENTS_REQUEST,
	});

	try 
	{
		const ingredients = await getIngredientsApi();
		dispatch({
			type: GET_INGREDIENTS_SUCCESS,
			payload: ingredients,
		});
	} 
	catch (err) 
	{
		dispatch({
			type: GET_INGREDIENTS_FAILED,
			payload: err,
		});
	}
  };


