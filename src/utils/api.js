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
  
// fetch с обновлением токена (localStorage)
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