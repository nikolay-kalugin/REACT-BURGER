import { getIngredientsRequest, getIngredientsSuccess, getIngredientsFailed } from '../redux/actions/actions'

export const getIngredients = 
	() => 
		(dispatch) => {
			
			dispatch( getIngredientsRequest() );

			const url = `https://norma.nomoreparties.space/api/ingredients`;

			fetch( url )
			.then( response => response.ok 
						? response.json() 
						: Promise.reject( new Error('Server returned ' + response.status) ) 
			)
			.then( obj => dispatch( getIngredientsSuccess(obj.data) ) )
			.catch( err => dispatch( getIngredientsFailed(err) ) )
		} 


