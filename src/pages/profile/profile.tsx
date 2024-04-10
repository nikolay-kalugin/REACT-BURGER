import { SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './profile.module.css';
import { NavLink } from 'react-router-dom';
import { Input, PasswordInput, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { setUserName, setUserEmail, setUser } from '../../redux/actions/userActions';
import { BURGER_API_URL, fetchWithRefresh, getUserData, patchUserData } from '../../utils/api';

export function ProfilePage() {

	const dispatch = useDispatch();

	const [userNameEditing, setUserNameEditing] = useState(true);

	const onNameIconClickHandler = () =>
	{
		setUserNameEditing(!userNameEditing);
	}

	const [isVisibleProfile, setIsVisibleProfile] = useState(true);

	const [profileName, setProfileName] = useState('');
	const onChangeName = (e: { target: { value: SetStateAction<string>; }; }) => {
		setProfileName(e.target.value);
	}

	const [profileEmail, setProfileEmail] = useState('');
	const onChangeEmail = (e: { target: { value: SetStateAction<string>; }; }) => {
		setProfileEmail(e.target.value);
	}

	const [profilePassword, setProfilePassword] = useState('');
	const onChangePassword = (e: { target: { value: SetStateAction<string>; }; }) => {
		setProfilePassword(e.target.value);
	}

	// Подгрузка данных пользователя в профиль
	useEffect(() =>

			//@ts-ignore
			async() => {

				if( document.location.pathname === '/profile' )
				{
					const getUserDataResult = await getUserData();
		
					if (getUserDataResult.success)
					{
						setProfileName(getUserDataResult.user.name);
						setProfileEmail(getUserDataResult.user.email);
					}
				}
			}
	,[]) 
	


	let logoutData = {
		"token": localStorage.getItem("refreshToken")
	}

	// Обработчик кнопки "Выход"	
	const onClickLogoutHandler = async(url: string, data: { token: string | null; }) => {
		const logoutUserResult = await fetchWithRefresh(url, data)
		dispatch(setUser(null));
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		console.log(logoutUserResult.message)
	}

	// Обработчик кнопки "Отменить"
	const onClickCancelBtn = async() => {

		const getUserDataResult = await getUserData();

		if (getUserDataResult.success)
		{
			setProfileName(getUserDataResult.user.name);
			setProfileEmail(getUserDataResult.user.email);
		}

	}

	let newUserData = {
		"name": profileName,
		"email": profileEmail,
		"password": profilePassword,
	}

	// Обработчик кнопки "Сохранить"
	const onClickSaveBtn = async(url: string, data: { name: string; email: string; password: string; }) => {
		const patchUserDataResult = await patchUserData(url, data)

		if(patchUserDataResult.success)
		{
			dispatch(setUserName(patchUserDataResult.user.name));
			dispatch(setUserEmail(patchUserDataResult.user.email));
		}

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
										<p className={`styles.Text ${isActive ? styles.TextDefault : styles.TextInactive}`}>
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
								onClick={() => setIsVisibleProfile(true)} 
							>
								{
									({isActive}) => (
										<p className={`styles.Text ${isActive ? styles.TextDefault : styles.TextInactive}`}>
											История заказов
										</p>
									)
								}
							</NavLink>
						</li>
						<li className={styles.SideNavItem}>
							<NavLink 
								to="/login" 
								className={styles.NavLink}
								onClick={() => onClickLogoutHandler(`${BURGER_API_URL}/auth/logout`, logoutData)} 
							>
								{
									({isActive}) => (
										<p className={`styles.Text ${isActive ? styles.TextDefault : styles.TextInactive}`}>
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
								В этом разделе вы можете изменить<br/> свои персональные данные
							</p>
						)
					}
				</div>

				{
					isVisibleProfile && (

						<form 
							className={styles.form} 
							onSubmit={e => { e.preventDefault(); }}
						>

							<Input
								onChange={onChangeName}
								value={profileName}
								type={'text'}
								placeholder={'Имя'}
								icon={'EditIcon'}
								name={'name'}
								error={false}
								onIconClick={() => onNameIconClickHandler()} 
								errorText={'Ошибка'}
								size={'default'}
								extraClass="mb-6"
								disabled={userNameEditing}
							/>

							<EmailInput
								onChange={onChangeEmail}
								value={profileEmail}
								name={'email'}
								placeholder="Логин"
								isIcon={true}
								extraClass="mb-6"
							/>

							<PasswordInput
								onChange={onChangePassword}
								value={profilePassword}
								name={'password'}
								icon="EditIcon"
								extraClass="mb-6"
							/>


							<Button 
								htmlType="button" 
								type="primary" 
								size="medium" 
								extraClass="ml-2"
								onClick={() => onClickCancelBtn()}
							>
								Отменить
							</Button>

							<Button 
								htmlType="button" 
								type="primary" 
								size="medium" 
								extraClass="ml-2"
								onClick={() => onClickSaveBtn(`${BURGER_API_URL}/auth/user`, newUserData)}
							>
								Сохранить
							</Button>
				
						</form>
					)
				}

			</div>
		</div>
	);
} 