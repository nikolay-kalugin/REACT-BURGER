import React from 'react';
import styles from './forgot-password.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function ForgotPasswordPage() {

	const [email, setEmail] = React.useState('bob@example.com')
	const onChangeEmail = e => {
		setEmail(e.target.value)
	}

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
						onClick={() => alert('Восстановить')}
					>
						Восстановить
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