// API_URL
export const BURGER_API_URL = 'https://norma.nomoreparties.space/api'; 

// Проверка успешности ответа сервера
const checkResponse = (res) => {
	return res.ok 
				? res.json()
				: res.json().then((err) => Promise.reject(err));
};
  
// Обновление токена
export const refreshToken = () => {
	return fetch(`${BURGER_API_URL}/auth/token`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({
				token: localStorage.getItem("refreshToken"),
			}),
		}).then(res => checkResponse(res));
};
  


// fetch с обновлением токена (используется localStorage)
export const fetchWithRefresh = async (url, options) => {
	try {
		const res = await fetch(url, 
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(options)
				}
			);
		return await checkResponse(res);
	} 
	catch(err) 
	{
		if (err.message === "jwt expired") 
		{
			// обновляем токен
			const refreshData = await refreshToken(); 
			if (!refreshData.success) 
			{
				return Promise.reject(refreshData);
			}

			localStorage.setItem("refreshToken", refreshData.refreshToken);
			localStorage.setItem("accessToken", refreshData.accessToken);
			options.headers.authorization = refreshData.accessToken;

			// повторяем запрос
			const res = await fetch(url, 
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(options)
					}
				); 
			return await checkResponse(res);
		} 
		else 
		{
			// return Promise.reject(err);
			alert( err.message ) 
		}
	}
};


// getUserData с обновлением токена (используется localStorage)
export const getUserData = async () => {
	try {
		const res = await fetch(`${BURGER_API_URL}/auth/user`, 
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": localStorage.getItem("accessToken"),
					},
				}
			);
		return await checkResponse(res);
	} 
	catch(err) 
	{
		if (err.message === "jwt expired" || err.message === "Token is invalid")  
		{
			// обновляем токен
			const refreshData = await refreshToken(); 
			if (!refreshData.success) 
			{
				return Promise.reject(refreshData);
			}

			localStorage.setItem("refreshToken", refreshData.refreshToken);
			localStorage.setItem("accessToken", refreshData.accessToken);


			// повторяем запрос
			const res = await fetch(`${BURGER_API_URL}/auth/user`, 
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Authorization": localStorage.getItem("accessToken"),
						},
					}
				); 
			return await checkResponse(res);
		} 
		else 
		{
			// return Promise.reject(err);
			alert( err.message ) 
		}
	}
};

// patchUserData с обновлением токена (используется localStorage)
export const patchUserData = async (url, options) => {
	try {
		const res = await fetch(url, 
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
						"Authorization": localStorage.getItem("accessToken"),
					},
					body: JSON.stringify(options)
				}
			);
		return await checkResponse(res);
	} 
	catch(err) 
	{
		if (err.message === "jwt expired") 
		{
			// обновляем токен
			const refreshData = await refreshToken(); 
			if (!refreshData.success) 
			{
				return Promise.reject(refreshData);
			}

			localStorage.setItem("refreshToken", refreshData.refreshToken);
			localStorage.setItem("accessToken", refreshData.accessToken);
			options.headers.authorization = refreshData.accessToken;

			// повторяем запрос
			const res = await fetch(url, 
					{
						method: "PATCH",
						headers: {
							"Content-Type": "application/json",
							"Authorization": localStorage.getItem("accessToken"),
						},
						body: JSON.stringify(options)
					}
				); 
			return await checkResponse(res);
		} 
		else 
		{
			// return Promise.reject(err);
			alert( err.message ) 
		}
	}
};



/*

export const fetchData = (url, method, token) => {

	return fetch( url, 
			{
				method: method,
				headers: {
					"Content-Type": "application/json",
					"Authorization": token,
				},
			}
	)
	.then( response => response.ok 
				? response.json() 
				: Promise.reject( new Error('Server returned ' + response.status) ) 
	)
	.then( obj => obj.data )
	.catch( err )	
}

*/