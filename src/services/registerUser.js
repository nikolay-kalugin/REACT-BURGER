import { userRegistrationRequest, userRegistrationSuccess, userRegistrationFailed } from '../redux/actions/userActions';
import { BURGER_API_URL } from '../utils/api';

export const registerUser = 
	(dataParam) => 
		(dispatch) => {
			
			dispatch( userRegistrationRequest() );

			const url = `${BURGER_API_URL}/auth/register`;

			fetch( url,	
			{			
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataParam) 
			})
			.then( response => response.ok 
				? response.json() 
				: response.json().then( obj => alert( obj.message ) )
					// Promise.reject( new Error('Server returned ' + response.status) ) 
				
					
			)
			.then( obj => 
					{
						localStorage.setItem("refreshToken", obj.refreshToken);
						localStorage.setItem("accessToken", obj.accessToken);
						dispatch( userRegistrationSuccess(obj) );
					}
			)
			.catch( err => 
				dispatch( userRegistrationFailed(err) ) 
			)
		} 