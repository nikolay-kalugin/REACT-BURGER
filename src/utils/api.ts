// API_URL
export const BURGER_API_URL = 'https://norma.nomoreparties.space/api'; 

// Проверка успешности ответа сервера
const checkResponse = (res: Response) => {
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
export const fetchWithRefresh = async (url: RequestInfo | URL, options: { email?: string; password?: string; token?: string | null; headers?: any; }) => {
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
		//@ts-ignore
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
			//@ts-ignore
			console.log( err.message );
			return Promise.reject(err);
		}
	}
};


// getUserData с обновлением токена (используется localStorage)
export const getUserData = async () => {
	try {
		const res = await fetch(`${BURGER_API_URL}/auth/user`, 
				{
					method: "GET",
					//@ts-ignore
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
		//@ts-ignore
		if ( err.message === "jwt expired" )  // err.message === "Token is invalid"
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
						//@ts-ignore
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
			//@ts-ignore
			console.log( err.message );
			return Promise.reject(err);
		}
	}
};


// patchUserData с обновлением токена (используется localStorage)
export const patchUserData = async (url: RequestInfo | URL, options: { name?: string; email?: string; password?: string; headers?: any; }) => {
	try {
		const res = await fetch(url, 
				{
					method: "PATCH",
					//@ts-ignore
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
		//@ts-ignore
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
						//@ts-ignore
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
			//@ts-ignore
			console.log( err.message );
			return Promise.reject(err);
		}
	}
};