export const getIngredientsArr = () => {
			
			const url = `https://norma.nomoreparties.space/api/ingredients`;

			fetch( url )
			.then( response => response.ok 
						? response.json() 
						: Promise.reject( new Error('Server returned ' + response.status) ) 
			)
			.then( obj => obj.data )
			.catch( err => err )
		} 



