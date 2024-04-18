import { getOrderDataRequest, 
		getOrderDataSuccess, 
		getOrderDataFailed, 
} from '../redux/actions/orderDetailsActions';

import { setOrderDetails } from '../redux/actions/orderDetailsActions';
import { BURGER_API_URL } from '../utils/api';
import { AppThunk, AppDispatch } from '../index';


export const getOrderData : AppThunk = 

	(data) =>

		(dispatch : AppDispatch) => {
			
			dispatch( getOrderDataRequest() );

			const url = `${BURGER_API_URL}/orders`;

			fetch( url, 
			{
				method: "POST",

				headers: {
					"Content-Type": "application/json",
					"Authorization": localStorage.getItem("accessToken"),
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


