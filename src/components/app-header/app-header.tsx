import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../redux/selectors/selectors';

function AppHeader() 
{
	// признак, что пользователь авторизовался
	const user = useSelector( getUser );

	return (
	  	<header className={styles.Header}>
			<nav className={styles.Nav}>
				<ul className={styles.NavList}>
					<li className={styles.NavItem}>
						<NavLink to="/" className={styles.NavLink} >
						{
							({isActive}) => (
								<>
									<span className={styles.NavIcon}>
										<BurgerIcon type={isActive ? "primary" : "secondary"} />
									</span>
									<p className ={`${styles.Text} ${isActive ? styles.TextDefault : styles.TextInactive}`}>
										Конструктор
									</p>
								</>
							)
						}
						</NavLink>
					</li>
					<li className={styles.NavItem}>
						<NavLink to="/orders" className={styles.NavLink} >
						{
							({isActive}) => (
								<>
									<span className={styles.NavIcon}>
										<ListIcon type={isActive ? "primary" : "secondary"} />
									</span>
									<p className={`${styles.Text} ${isActive ? styles.TextDefault : styles.TextInactive}`}>
										Лента заказов
									</p>
								</>
							)
						}
						</NavLink>
					</li>
					<li className={styles.NavItem}>
						<NavLink to="/" className={styles.NavLink} >
							<span className={styles.NavIcon}>
								<Logo />
							</span>
						</NavLink>
					</li>
					<li className={styles.NavItem}>
						<NavLink to="/profile" className={styles.NavLink} >
						{
							({isActive}) => (
								<>
									<span className={styles.NavIcon}>
										<ProfileIcon type={ isActive ? "primary" : "secondary"} />
									</span>
									<p className={`${styles.Text} ${isActive ? styles.TextDefault : styles.TextInactive}`}
									>
										{!user ? 'Личный кабинет' : user.name}
									</p>
								</>
							)
						}
						</NavLink>
					</li>
				</ul> 
			</nav>
	  	</header>
	)
}
  
export default AppHeader;