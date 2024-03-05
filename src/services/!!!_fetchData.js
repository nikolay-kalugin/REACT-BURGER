

export const fetchData = (url, method, token, sendData) => {

	return fetch( url, 
			{
				method: method,
				headers: {
					"Content-Type": "application/json",
					"Authorization": token,
				},
				body: JSON.stringify(sendData)
			}
	)
	.then( response => response.ok 
				? response.json() 
				: Promise.reject( new Error('Server returned ' + response.status) ) 
	)
	.then( obj => obj.data )
	.catch( err => Promise.reject(err) )	
}