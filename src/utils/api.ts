import { TRefreshTokenResponse } from '../types/types' 

// API_URL
export const BURGER_API_URL = 'https://norma.nomoreparties.space/api'; 


// Проверка успешности ответа сервера
const checkResponse = <T>(res: Response): Promise<T> => {
	return res.ok 
				? res.json()
				: res.json().then((err) => Promise.reject(err));
};
  
// Обновление токена
export const refreshToken = (): Promise<TRefreshTokenResponse> => {
	return fetch(`${BURGER_API_URL}/auth/token`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({
				token: localStorage.getItem("refreshToken"),
			}),
		}).then(res => checkResponse<TRefreshTokenResponse>(res));
};
  



// fetch с обновлением токена (используется localStorage)
export const fetchWithRefresh = async (url: RequestInfo | URL, options: { email?: string; password?: string; token?: string | null; headers?: any; }) : Promise<TRefreshTokenResponse> => {
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
		return await checkResponse<TRefreshTokenResponse>(res);
	} 
	catch(err: any) 
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
			return await checkResponse<TRefreshTokenResponse>(res);
		} 
		else 
		{
			console.log( err.message );
			return Promise.reject(err);
		}
	}
};


// getUserData с обновлением токена (используется localStorage)
export const getUserData = async () : Promise<TRefreshTokenResponse> => {
	try 
	{
		const accessToken = localStorage.getItem("accessToken");

		if(accessToken) 
		{
			const res = await fetch(`${BURGER_API_URL}/auth/user`, 
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": accessToken,
					},
				}
			);

			return await checkResponse<TRefreshTokenResponse>(res);

		}
		
		return Promise.reject();
	} 
	catch(err: any) 
	{

		if ( err.message === "jwt expired" ) 
		{
			// обновляем токен
			const refreshData = await refreshToken(); 

			if (!refreshData.success) 
			{
				return Promise.reject(refreshData);
			}

			localStorage.setItem("refreshToken", refreshData.refreshToken);
			localStorage.setItem("accessToken", refreshData.accessToken);

			const accessToken = localStorage.getItem("accessToken");

			if(accessToken)
			{
				// повторяем запрос
				const res = await fetch(`${BURGER_API_URL}/auth/user`, 
						{
							method: "GET",
						
							headers: {
								"Content-Type": "application/json",
								"Authorization": accessToken,
							},
						}
					); 
				return await checkResponse<TRefreshTokenResponse>(res);
			}

			return Promise.reject();

		} 
		else 
		{
			console.log( err.message );
			return Promise.reject(err);
		}
	}
};


// patchUserData с обновлением токена (используется localStorage)
export const patchUserData = async (url: RequestInfo | URL, options: { name?: string; email?: string; password?: string; headers?: any; }) : Promise<TRefreshTokenResponse> => {
	try 
	{
		const accessToken = localStorage.getItem("accessToken");

		if(accessToken)
		{

			const res = await fetch(url, 
				{
					method: "PATCH",
				
					headers: {
						"Content-Type": "application/json",
						"Authorization": accessToken,
					},
					body: JSON.stringify(options)
				}
			);

			return await checkResponse<TRefreshTokenResponse>(res);

		}

		return Promise.reject();

	} 
	catch(err: any) 
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


			const accessToken = localStorage.getItem("accessToken");

			if(accessToken)
			{
				// повторяем запрос
				const res = await fetch(url, 
					{
						method: "PATCH",

						headers: {
							"Content-Type": "application/json",
							"Authorization": accessToken,
						},
						body: JSON.stringify(options)
					}
				);

				return await checkResponse<TRefreshTokenResponse>(res);
			}

			return Promise.reject();

		} 
		else 
		{
			console.log( err.message );
			return Promise.reject(err);
		}
	}
};