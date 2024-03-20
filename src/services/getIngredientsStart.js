import { getIngredientsRequest, getIngredientsSuccess, getIngredientsFailed } from '../redux/actions/ingredientsActions';
import { BURGER_API_URL } from '../utils/api';


export const getIngredientsStart = 
	() => 
		(dispatch) => {
			
			dispatch( getIngredientsRequest() );

			const url = `${BURGER_API_URL}/ingredients`;

			fetch( url )
			.then( response => response.ok 
						? response.json() 
						: Promise.reject( new Error('Server returned ' + response.status) ) 
			)
			.then( obj => {
					dispatch( getIngredientsSuccess(obj.data) ) 
				}
			)
			.catch( err => dispatch( getIngredientsFailed(err) ) )
		} 



