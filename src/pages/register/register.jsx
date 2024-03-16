import { useState } from 'react';
import styles from './register.module.css';
import { Input, Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/registerUser'
import { getUserRegistrationSuccess } from '../../redux/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';

export function RegisterPage() {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userRegistrationSuccess = useSelector( getUserRegistrationSuccess );

	const [userName, setUserName] = useState('');
	const onChangeUserName = (e) => {
		setUserName(e.target.value)
	}

	const [userEmail, setUserEmail] = useState('');
	const onChangeEmail = (e) => {
		setUserEmail(e.target.value)
	}

	const [userPassword, setUserPassword] = useState(''); // password
	const onChangePassword = (e) => {
		setUserPassword(e.target.value)
	}

	let registerUserData = {
		"name": userName,
		"email": userEmail, 
		"password": userPassword, 

	}

	const onClickHandler = (data) => {

		dispatch( registerUser(data) );

		if (userRegistrationSuccess) 
		{
			navigate(`/login`);
		} 
		
	}

	
	return (
		<div className={styles.Page}>
			<div className={styles.Wrapper}>
			
				<form 
					className={styles.form}
					onSubmit={e => { e.preventDefault(); }}
				>

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
						onClick={() => onClickHandler( registerUserData )}
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