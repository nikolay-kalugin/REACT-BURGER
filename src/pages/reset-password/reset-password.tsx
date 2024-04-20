import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './reset-password.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { BURGER_API_URL, fetchWithRefresh } from '../../utils/api';

export function ResetPasswordPage() {

	const navigate = useNavigate();

	const [newUserPassword, setNewUserPassword] = useState('')
	const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setNewUserPassword(e.target.value)
	}

	const [token, setToken] = useState('')
	const onChangeToken = (e: ChangeEvent<HTMLInputElement>) => {
		setToken(e.target.value)
	}

	let resetPasswordData = {
		"password": newUserPassword,
		"token": token,
	  } 


	const onClickHandler = async (url: string, data: { password: string; token: string; }) => {
		const updatePasswordResult = await fetchWithRefresh(url, data)
										
		updatePasswordResult.success && navigate(`/login`);
	}

	return (
		<div className={styles.Page}>
			<div className={styles.Wrapper}>
			
				<form 
					className={styles.form}
					onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); }}
				>

					<h2 className="mb-6">Восстановление пароля</h2>

					<PasswordInput
						onChange={onChangePassword}
						value={newUserPassword}
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
						onClick={() => onClickHandler(`${BURGER_API_URL}/password-reset/reset`, resetPasswordData)}
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