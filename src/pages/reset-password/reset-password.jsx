import React from 'react';
import styles from './reset-password.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

export function ResetPasswordPage() {

	const [password, setPassword] = React.useState('password')

	const onChangePassword = e => {
		setPassword(e.target.value)
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
						// onChange={e => {e.target.value}}
						name={'email'}
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
						onClick={() => alert('Сохранить')}
					>
						Сохранить
					</Button>

					<p className="text text_type_main-default text_color_inactive">
						Вспомнили пароль?
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