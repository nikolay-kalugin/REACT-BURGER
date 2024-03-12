import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthRequest, getUserIsLogged } from '../../redux/selectors/selectors';
import { useSelector } from 'react-redux';

export function OnlyAuth({component}) {

	let location = useLocation();

	const userAuthRequest = useSelector( getUserAuthRequest );
	const userIsLogged = useSelector( getUserIsLogged );

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

	let location = useLocation();
	const userIsLogged = useSelector( getUserIsLogged );

	// Маршруты для блокировки
	const isProtectedPath = ['/login', '/register', '/forgot-password', '/reset-password'].indexOf(location.pathname) === 0

	// Если Пользоавтель Авторизован, то блокируем маршруты из массива
	if( userIsLogged && isProtectedPath ) 
	{
		return <Navigate to="/" />
	}
	else
	{
		return component
	}
		
	
			


}





