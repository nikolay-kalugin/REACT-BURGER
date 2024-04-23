import { userRegistrationRequest, userRegistrationSuccess, userRegistrationFailed } from '../redux/actions/userActions';
import { BURGER_API_URL } from '../utils/api';
import { AppDispatch } from '../index';

import { TUser } from '../types/types'

export const registerUser = 
	(dataParam: TUser) =>
	{
		return (dispatch: AppDispatch) => {
			
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
				: response.json().then( obj => console.log( obj.message ) )
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
	}