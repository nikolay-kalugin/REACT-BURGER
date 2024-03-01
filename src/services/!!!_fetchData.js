export const fetchData = (url, data) => {

	return fetch( url, 
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data)
			}
	)
	.then( response => response.ok 
				? response.json() 
				: Promise.reject( new Error('Server returned ' + response.status) ) 
	)
	.then( obj => obj.data )
	.catch( err => Promise.reject(err) )
	
}