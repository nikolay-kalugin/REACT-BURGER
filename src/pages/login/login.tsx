import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './login.module.css';
import { Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BURGER_API_URL, fetchWithRefresh } from '../../utils/api';
import { useDispatch } from '../../index';

import { setUserAuthRequest, 
	setUserAuthSuccess, 
	setUserAuthFailed, 
	setUser, 
	setUserPassword } from '../../redux/actions/userActions'


export function LoginPage() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const loginUrl = `${BURGER_API_URL}/auth/login`

	const [userAuthEmail, setUserAuthEmail] = useState('');
	const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setUserAuthEmail(e.target.value)
	}

	const [userAuthPassword, setUserAuthPassword] = useState('');
	const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setUserAuthPassword(e.target.value)
	}


	let loginUserData = {
		"email": userAuthEmail, 
		"password": userAuthPassword, 

	}

	// Обработчик кнопки "Вход"
	const  onClickHandler = async ( url: string, data: { email: string; password: string; } ) => {

		const authUserResult = await fetchWithRefresh(url, data)

		dispatch(setUserAuthRequest(true));
		
		if(authUserResult.success)
		{
			dispatch(setUserAuthSuccess());
			dispatch(setUser(authUserResult.user));
			dispatch(setUserPassword(userAuthPassword));
			localStorage.setItem("accessToken", authUserResult.accessToken);
			localStorage.setItem("refreshToken", authUserResult.refreshToken);
			
			if(location.state !== null && location.state.savePath !== null)
			{
				
				navigate(location.state.savePath)
			}
			else
			{
				navigate(`/`);	
			} 
			
		}
		else
		{
			dispatch(setUserAuthFailed('Error'));
		} 
	}


	return (
		<div className={styles.Page}>
			<div className={styles.Wrapper}>
			
				<form 
					className={styles.form}
					onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); }}
				>

					<h2 className="mb-6">Вход</h2>

					<EmailInput
						onChange={onChangeEmail}
						value={userAuthEmail}
						name={'email'}
						isIcon={false}
						extraClass="mb-6"
					/>


					<PasswordInput
						onChange={onChangePassword}
						value={userAuthPassword}
						name={'password'}
						extraClass="mb-6"
					/>	
					
					<Button 
						htmlType="button" 
						type="primary" 
						size="medium"
						extraClass="mb-20"
						onClick={() => onClickHandler(loginUrl, loginUserData)}
					>
						Войти
					</Button>

					<p className="text text_type_main-default text_color_inactive">
						Вы — новый пользователь?
						<NavLink to="/register">
							<Button 
								htmlType="button" 
								type="secondary" 
								size="medium"
							>
								Зарегистрироваться
							</Button>
						</NavLink>
					</p>

					<p className="text text_type_main-default text_color_inactive">
						Забыли пароль?
						<NavLink to="/forgot-password">
							<Button 
								htmlType="button" 
								type="secondary" 
								size="medium"
							>
								Восстановить пароль
							</Button>
						</NavLink>
					</p>
			
				</form>

			</div>
		</div>
	);
} 