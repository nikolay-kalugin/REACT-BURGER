import React from 'react';
import styles from './forgot-password.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from 'react-router-dom';
// import { fetchWithRefresh } from '../../utils/api'

export function ForgotPasswordPage() {

	const [email, setEmail] = React.useState('bob@example.com')
	const onChangeEmail = (e) => {
		setEmail(e.target.value)
	}

	const navigate = useNavigate();

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
					navigate(`/reset-password`)
				}
			}
		)
		.catch( err => console.log(err) )

	}

	// const onClickHandler = (url, data) => {
	// 	fetchWithRefresh()
	// }
	


	return (
		<div className={styles.Page}>
			<div className={styles.Wrapper}>
			
				<form className={styles.form}>

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
						onClick={() => onClickHandler(`/password-reset`, {email}) }
					>
						Восстановить
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