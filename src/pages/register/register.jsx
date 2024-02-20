import React from 'react';
import styles from './register.module.css';
import { Input, Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

export function RegisterPage() {

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

					<h2 className="mb-6">Регистрация</h2>

					<Input
						type={'text'}
						placeholder={'Имя'}
						// onChange={e => {e.target.value}}
						name={'name'}
						error={false}
						onIconClick={() => alert('name')}
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
						onClick={() => alert('Зарегистрироваться')}
					>
						Зарегистрироваться
					</Button>

					<p className="text text_type_main-default text_color_inactive">
						Уже зарегистрированы?
						<Button 
							htmlType="button" 
							type="secondary" 
							size="medium"
							onClick={() => alert('Войти')}
						>
							Войти
						</Button>
					</p>
			
				</form>

			</div>
		</div>
	);
} 