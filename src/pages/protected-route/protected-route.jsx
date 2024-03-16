import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthRequest, getUser } from '../../redux/selectors/selectors';

export function OnlyAuth({component}) {

	let location = useLocation();

	// признак того, что запрос на Авторизацию в процессе 
	const userAuthRequest = useSelector( getUserAuthRequest );
	const user = useSelector( getUser );

	console.log('userAuthRequest', userAuthRequest)
	console.log('user', user)

	// Если Пользователь в процессе авторизации
	if(userAuthRequest)
	{
		return ( 
			<div>Пользователь в процессе авторизации ....</div> 
		)
	} 

	// Маршруты доступные НЕ Авторизованному пользователю
	if(!user) 
	{
		return <Navigate to="/login" state={{savePath: location.pathname}} />
	}

	return component	
			
}


export function OnlyUnAuth({component}) {

	let location = useLocation();
	const user = useSelector( getUser );

	console.log('user', user)

	// Маршруты для блокировки
	const isProtectedPath = ['/login', '/register', '/forgot-password', '/reset-password'].indexOf(location.pathname) === 0

	// Если Пользоавтель Авторизован, то блокируем маршруты из массива
	if( user && isProtectedPath ) 
	{

		console.log(123)

		return <Navigate to="/" />
	}
	else
	{
		return component
	}
		
	
			


}





