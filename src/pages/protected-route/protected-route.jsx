import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthRequest } from '../../redux/selectors/selectors';
import { useSelector } from 'react-redux';
import { getUserData } from '../../utils/api';
import { useEffect, useMemo } from 'react';


export function OnlyAuth({component}) {

	const userAuthRequest = useSelector( getUserAuthRequest );
	const userIsLogged = () => getUserData();

	let location = useLocation();

	// Если Пользователь в процессе авторизации
	if(userAuthRequest)
	{
		return ( 
			<div>Пользователь в процессе авторизации ...</div> 
		)
	} 

	// Маршруты доступные НЕ Авторизованному пользователю
	if(!userIsLogged) 
	{
		return <Navigate to="/login" state={{savePath: location.pathname}} />
	}

	return component	

}


export function OnlyUnAuth({component}) {

	// Маршруты для блокировки
	const protectedArr = useMemo(() => ['/login', '/register', '/forgot-password', '/reset-password'], [])
	let location = useLocation();

	useEffect(() => 

		async() => {

			const getUserDataResult = await getUserData();

			// Если Пользоавтель Авторизован, то блокируем маршруты из массива

			if( getUserDataResult.success && ( protectedArr.indexOf(location.pathname) === 0 ) ) 
			{
				return <Navigate to="/" />
			}
			else
			{
				return component
			}
		
	
			
		}


	,[protectedArr, location.pathname, component])

}





