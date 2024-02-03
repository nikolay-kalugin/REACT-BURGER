import getIngredientsApi from '../../services/getApiData'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = () => async (dispatch) => {
	dispatch({
	  type: GET_INGREDIENTS_REQUEST,
	});
	try {
		const ingredients = await getIngredientsApi();
		dispatch({
			type: GET_INGREDIENTS_SUCCESS,
			payload: ingredients,
		});
	} catch (err) {
		dispatch({
			type: GET_INGREDIENTS_FAILED,
			payload: err,
		});
	}
  };


