import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation } from 'react-router-dom';


function AppHeader() 
{

	const location = useLocation();

	const customActive = location.pathname === '/cabinet/profile'
						|| location.pathname === '/cabinet/history'
						|| location.pathname === '/cabinet/exit'

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
									<p className={[styles.Text, isActive ? styles.TextDefault : styles.TextInactive]}>
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
									<p className={[styles.Text, isActive ? styles.TextDefault : styles.TextInactive]}>
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
						<NavLink to="/cabinet/profile" className={styles.NavLink} >
						{
							({isActive}) => (
								<>
									<span className={styles.NavIcon}>
										<ProfileIcon type={(isActive || customActive) ? "primary" : "secondary"} />
									</span>
									<p className={[styles.Text, (isActive || customActive) ? styles.TextDefault : styles.TextInactive]}
									>
										Личный кабинет
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