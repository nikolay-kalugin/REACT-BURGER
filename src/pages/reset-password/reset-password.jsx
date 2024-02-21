import React from 'react';
import styles from './reset-password.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from 'react-router-dom';

export function ResetPasswordPage() {

	const navigate = useNavigate();

	const [password, setPassword] = React.useState('password')
	const onChangePassword = (e) => {
		setPassword(e.target.value)
	}

	const [token, setToken] = React.useState('')
	const onChangeToken = (e) => {
		setToken(e.target.value)
	}

	let resetData = {
		"password": password,
		"token": token
	  } 

	const onClickHandler = (url, data) => {

		fetch( url, 
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data)
			}
		)
		.then( response => response.ok 
					? response.json() 
					: Promise.reject( new Error('Server returned ' + response.status) ) 
		)
		.then( obj => {
				if( obj.success )
				{ 
					navigate(`/login`)
				}
			}
		)
		.catch( err => console.log(err) )

	}


	return (
		<div className={styles.Page}>
			<div className={styles.Wrapper}>
			
				<form className={styles.form}>

					<h2 className="mb-6">Восстановление пароля</h2>

					<PasswordInput
						onChange={onChangePassword}
						value={password}
						name={'password'}
						extraClass="mb-6"
					/>

					<Input
						type={'text'}
						placeholder={'Введите код из письма'}
						name={'token'}
						value={token}
						onChange={onChangeToken}
						error={false}
						errorText={'Ошибка'}
						size={'default'}
						extraClass="mb-6"
					/>	
					
					<Button 
						htmlType="button" 
						type="primary" 
						size="medium"
						extraClass="mb-20"
						onClick={() => onClickHandler('https://norma.nomoreparties.space/api/password-reset/reset', resetData)}
					>
						Сохранить
					</Button>

					<p className="text text_type_main-default text_color_inactive">
						Вспомнили пароль?
						<NavLink to="/login">
							<Button 
								htmlType="button" 
								type="secondary" 
								size="medium"
							>
								Войти
							</Button>
						</NavLink>
					</p>
			
				</form>

			</div>
		</div>
	);
	} 