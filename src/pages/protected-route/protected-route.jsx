import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthRequest } from '../../redux/selectors/selectors';
import { useSelector } from 'react-redux';
import { getUserData } from '../../utils/api';
import { useEffect } from 'react';

export function OnlyAuth({component}) {

	const userAuthRequest = useSelector( getUserAuthRequest );

	let location = useLocation();

	useEffect(() => 

			async() => {
			
				const userIsLogged = await getUserData();

				// Маршруты доступные НЕ Авторизованному пользователю
				if(!userIsLogged) 
				{
					return <Navigate to="/login" state={{savePath: location.pathname}} />
				}

				return component	
			
			} 

	, [location.pathname, component])

	// Если Пользователь в процессе авторизации
	if(userAuthRequest)
	{
		return ( 
			<div>Пользователь в процессе авторизации ...</div> 
		)
	} 

}


export function OnlyUnAuth({component}) {

	let location = useLocation();

	// Маршруты для блокировки
	const isProtectedPath = ['/login', '/register', '/forgot-password', '/reset-password'].indexOf(location.pathname) === 0

	useEffect(() => 

		async() => {

			const userDataResult = await getUserData();

			// Если Пользоавтель Авторизован, то блокируем маршруты из массива

			if( userDataResult.success && isProtectedPath ) 
			{
				return <Navigate to="/" />
			}
			else
			{
				return component
			}
		
	
			
		}


	,[location.pathname, component, isProtectedPath])

}





