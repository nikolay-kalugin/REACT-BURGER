export const fetchData = (url, data) => {

	fetch( url, 
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
	.then( obj => {
			if( obj.success )
			{ 
				window.location.replace(`/reset-password`)
			}
		}
	)
	.catch( err => console.log(err) )
	
}