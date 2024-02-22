import React from 'react';
import styles from './profile.module.css';
import { Input, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

export function ProfilePage() {

	const [isVisibleProfile, setIsVisibleProfile] = React.useState(true);

	const [name, setName] = React.useState('Ваше имя')
	const onChangeName = e => {
		setName(e.target.value)
	}

	const [email, setEmail] = React.useState('pochta@mail.ru')
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
			
				<div>
					<ul className={styles.SideNavMenu}>
						<li className={styles.SideNavItem}>
							<NavLink 
								to="/profile" 
								className={styles.NavLink} 
								onClick={() => setIsVisibleProfile(true)} 	
							>
								{
									({isActive}) => (
										<p className={[styles.Text, isActive ? styles.TextDefault : styles.TextInactive]}>
											Профиль
										</p>
									)
								}
							</NavLink>
						</li>
						<li className={styles.SideNavItem}>
							<NavLink 
								to="/profile/orders" 
								className={styles.NavLink} 
								onClick={() => setIsVisibleProfile(false)} 
							>
								{
									({isActive}) => (
										<p className={[styles.Text, isActive ? styles.TextDefault : styles.TextInactive]}>
											История заказов
										</p>
									)
								}
							</NavLink>
						</li>
						<li className={styles.SideNavItem}>
							<NavLink 
								to="/" 
								className={styles.NavLink}
								onClick={() => setIsVisibleProfile(false)} 
							>
								{
									({isActive}) => (
										<p className={[styles.Text, isActive ? styles.TextDefault : styles.TextInactive]}>
											Выход
										</p>
									)
								}
							</NavLink>
						</li>
					</ul>
				
					<div className="mb-30"></div>

					{
						isVisibleProfile && ( 
							<p className="text text_type_main-default text_color_inactive">
								В этом разделе вы можете изменить свои персональные данные
							</p>
						)
					}
				</div>

				{
					isVisibleProfile && (

						<form className={styles.form} >

							<Input
								type={'text'}
								placeholder={'Имя'}
								onChange={onChangeName}
								icon={'EditIcon'}
								value={name}
								name={'name'}
								error={false}
								onIconClick={() => alert('Edit name ...')}
								errorText={'Ошибка'}
								size={'default'}
								extraClass="mb-6"
							/>

							<EmailInput
								onChange={onChangeEmail}
								value={email}
								name={'email'}
								placeholder="Логин"
								isIcon={true}
								extraClass="mb-6"
							/>

							<PasswordInput
								onChange={onChangePassword}
								value={password}
								name={'password'}
								icon="EditIcon"
							/>
				
						</form>
					)
				}

			</div>
		</div>
	);
} 