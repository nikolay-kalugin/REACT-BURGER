import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthRequest, getUser } from '../../redux/selectors/selectors';

// Для авторизованных 
export function OnlyAuth({component}) {

	let location = useLocation();

	// признак того, что запрос на Авторизацию в процессе 
	const userAuthRequest = useSelector( getUserAuthRequest );

	// признак, что пользователь авторизовался
	const user = useSelector( getUser );

	// Если Пользователь в процессе авторизации
	if( userAuthRequest )
	{
		return ( 
			<div>Пользователь в процессе авторизации ....</div> 
		)
	} 

	// Маршруты доступные НЕ Авторизованному пользователю
	if( !user ) 
	{
		return <Navigate to="/login" state={{savePath: location.pathname}} />
	}

	return component	
			
}

// Для НЕ авторизованных 
export function OnlyUnAuth({component}) {

	const user = useSelector( getUser );
	const location = useLocation();



	// признак, что пользователь имеет доступ к маршруту /reыуе-password
	const resetPasswordAccess = location.state && location.state.resetPasswordAccess


	// Если Пользоавтель Авторизован, то блокируем маршруты 
	if( user ) 
	{
		return <Navigate to="/" />
	}
	else
	{
		// Блокировка маршрута сброса пароля (если нет доступа)
		if ( !resetPasswordAccess  &&  location.pathname === '/reset-password' )
		{
			return <Navigate to="/forgot-password" />
		}
		return component
	}
		
	
			


}





