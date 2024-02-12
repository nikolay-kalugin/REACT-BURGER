import { getOrderDataRequest, 
		getOrderDataSuccess, 
		getOrderDataFailed, 
} from '../redux/actions/orderDetailsActions';

import { setOrderDetails } from '../redux/actions/orderDetailsActions';

export const getOrderData = 
	(data) => 
		(dispatch) => {
			
			dispatch( getOrderDataRequest() );

			const url = `https://norma.nomoreparties.space/api/orders`;

			fetch( url, 
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
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


