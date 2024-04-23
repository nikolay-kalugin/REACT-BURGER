import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './forgot-password.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { BURGER_API_URL, fetchWithRefresh } from '../../utils/api';

export function ForgotPasswordPage() {

	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const onChangeEmail = (e: ChangeEvent<HTMLInputElement> ) => {
		setEmail(e.target.value)
	}

	const onClickHandler = async (url: string, data: { email: string; }) => {

		if (email === '') 
		{
			alert('Введите свой E-mail !')
		}
		else
		{
			const resetPasswordResult = await fetchWithRefresh(url, data)
										
			if(resetPasswordResult.success) 
			{
				navigate(`/reset-password`, { state: {resetPasswordAccess: true} })
			} 
		}
	}
	
	return (
		<div className={styles.Page}>
			<div className={styles.Wrapper}>
			
				<form 
					className={styles.form}
					onSubmit={ (e: FormEvent<HTMLFormElement>) => { 
						alert(123);
						e.preventDefault(); 
						// onClickHandler(`${BURGER_API_URL}/password-reset`, {email} );
					}}
				>

					<h2 className="mb-6">Восстановление пароля</h2>

					<EmailInput
						onChange={onChangeEmail}
						value={email}
						name={'email'}
						isIcon={false}
						extraClass="mb-6"
					/>
					
					<Button 
						htmlType="button" 
						type="primary" 
						size="medium"
						extraClass="mb-20"
						// onClick={() => onClickHandler(`${BURGER_API_URL}/password-reset`, {email} ) }
						
					>
						Восстановить
					</Button>

				</form>

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

			</div>
		</div>
	);
} 