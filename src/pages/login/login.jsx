import React from 'react';
import styles from './login.module.css';
import { Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate  } from 'react-router-dom';
import { BURGER_API_URL, fetchWithRefresh } from '../../utils/api';

export function LoginPage() {

	const navigate = useNavigate();

	const [userEmail, setUserEmail] = React.useState('')
	const onChangeEmail = (e) => {
		setUserEmail(e.target.value)
	}

	const [userPassword, setUserPassword] = React.useState('')
	const onChangePassword = (e) => {
		setUserPassword(e.target.value)
	}


	let loginUserData = {
		"email": userEmail, 
		"password": userPassword, 

	}

	const onClickHandler = (url, data) => {
		const authUserResult = fetchWithRefresh(url, data)
									.then( obj => obj.success );
		// console.log(resultAuthUser)
		authUserResult && navigate(`/`);
	}


	return (
		<div className={styles.Page}>
			<div className={styles.Wrapper}>
			
				<form className={styles.form}>

					<h2 className="mb-6">Вход</h2>

					<EmailInput
						onChange={onChangeEmail}
						value={userEmail}
						name={'email'}
						isIcon={false}
						extraClass="mb-6"
					/>


					<PasswordInput
						onChange={onChangePassword}
						value={userPassword}
						name={'password'}
						extraClass="mb-6"
					/>	
					
					<Button 
						htmlType="button" 
						type="primary" 
						size="medium"
						extraClass="mb-20"
						onClick={() => onClickHandler(`${BURGER_API_URL}/auth/login`, loginUserData)}
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