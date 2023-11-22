
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader() 
{
	return (
	  	<header className={styles.Header}>
			<nav className={styles.Nav}>
				<ul className={styles.NavList}>
					<li className={styles.NavItem}>
						<a className={styles.NavLink} href="!#">
							<span className={styles.NavIcon}><BurgerIcon type="primary" /></span>
							<p className={styles.TextDefault}>Конструктор</p>
						</a>
					</li>
					<li className={styles.NavItem}>
						<a className={styles.NavLink} href="!#">
							<span className={styles.NavIcon}><ListIcon type="secondary" /></span>
							<p className={styles.TextInactive}>Лента заказов</p>
						</a>
					</li>
					<li className={styles.NavItem}>
						<a className={styles.NavLink} href="!#">
							<Logo />
						</a>
					</li>
					<li className={styles.NavItem}>
						<a className={styles.NavLink} href="!#">
							<span className={styles.NavIcon}><ProfileIcon type="secondary" /></span>
							<p className={styles.TextInactive}>Личный кабинет</p>
						</a>
					</li>
				</ul> 
			</nav>
	  	</header>
	);
}
  
export default AppHeader;