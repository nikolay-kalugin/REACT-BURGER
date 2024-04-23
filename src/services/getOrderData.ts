import { getOrderDataRequest, 
		getOrderDataSuccess, 
		getOrderDataFailed, 
} from '../redux/actions/orderDetailsActions';

import { setOrderDetails } from '../redux/actions/orderDetailsActions';
import { BURGER_API_URL } from '../utils/api';
import { AppDispatch } from '../index';

import { TOrderResults } from '../types/types'


export const getOrderData = 

	(data: TOrderResults["data"]) =>

		(dispatch : AppDispatch) => {
			
			dispatch( getOrderDataRequest() );

			const url = `${BURGER_API_URL}/orders`;

			const accessToken = localStorage.getItem("accessToken");

			if(accessToken) 
			{
				fetch( url, 
					{
						method: "POST",
		
						headers: {
							"Content-Type": "application/json",
							"Authorization": accessToken,
						},
						body: JSON.stringify(data)
					})
					.then( response => response.ok 
								? response.json() 
								: Promise.reject( new Error('Server returned ' + response.status) ) 
					)
					.then( obj => { 
									dispatch( getOrderDataSuccess(obj.data) ); 
									return obj;
								})
					.then( obj => dispatch( setOrderDetails(obj) ) ) 
					.catch( err => dispatch( getOrderDataFailed(err) ) )
			}
		} 


