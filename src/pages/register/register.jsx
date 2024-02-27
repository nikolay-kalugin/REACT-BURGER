import React from 'react';
import styles from './register.module.css';
import { Input, Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from 'react-router-dom';

export function RegisterPage() {

	const navigate = useNavigate();

	const [userName, setUserName] = React.useState('')
	const onChangeUserName = (e) => {
		setUserName(e.target.value)
	}

	const [email, setEmail] = React.useState('bob@example.com')
	const onChangeEmail = (e) => {
		setEmail(e.target.value)
	}

	const [password, setPassword] = React.useState('password')
	const onChangePassword = (e) => {
		setPassword(e.target.value)
	}

	let registerData = {
		"email": email, 
		"password": password, 
		"name": userName 
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

					<h2 className="mb-6">Регистрация</h2>

					<Input
						type={'text'}
						placeholder={'Имя'}
						value={userName}
						onChange={onChangeUserName}
						name={'name'}
						error={false}
						errorText={'Ошибка'}
						size={'default'}
						extraClass="mb-6"
					/>

					<EmailInput
						onChange={onChangeEmail}
						value={email}
						name={'email'}
						isIcon={false}
						extraClass="mb-6"
					/>	

					<PasswordInput
						onChange={onChangePassword}
						value={password}
						name={'password'}
						extraClass="mb-6"
					/>
					
					<Button 
						htmlType="button" 
						type="primary" 
						size="medium"
						extraClass="mb-20"
						onClick={() => onClickHandler('https://norma.nomoreparties.space/api/auth/register', registerData )}
					>
						Зарегистрироваться
					</Button>

					<p className="text text_type_main-default text_color_inactive">
						Уже зарегистрированы?
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