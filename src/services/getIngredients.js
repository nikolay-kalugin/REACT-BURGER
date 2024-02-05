import { getIngredientRequest, getIngredientSuccess, getIngredientFailed } from '../redux/actions/actions'

export const getIngredients = 
	() => 
		(dispatch) => {

			const url = `https://norma.nomoreparties.space/api/ingredients`;

			dispatch( getIngredientRequest );

			fetch( url )
			.then( response => response.ok 
						? response.json() 
						: Promise.reject( new Error('Server returned ' + response.status) ) 
			)
			.then( obj => dispatch( getIngredientSuccess(obj.data) ) )
			.catch( err => dispatch( getIngredientFailed(err) ) )
		} 



