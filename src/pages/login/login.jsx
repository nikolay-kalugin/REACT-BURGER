import React from 'react';
import styles from './login.module.css';
import { Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

export function LoginPage() {

	const [email, setEmail] = React.useState('bob@example.com')
	const onChangeEmail = e => {
		setEmail(e.target.value)
	}

	const [password, setPassword] = React.useState('password')
	const onChangePassword = e => {
		setPassword(e.target.value)
	}

	return (
		<div className={styles.Page}>
			<div className={styles.Wrapper}>
			
				<form className={styles.form}>

					<h2 className="mb-6">Вход</h2>

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
						onClick={() => alert('Войти')}
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