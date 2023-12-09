
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Link from '../link/link'
import styles from './app-header.module.css';

function AppHeader() 
{
	return (
	  	<header className={styles.Header}>
			<nav className={styles.Nav}>
				<ul className={styles.NavList}>
					<li className={styles.NavItem}>
						<Link url="!#" icon={<BurgerIcon type="primary" />} text="Конструктор" />
					</li>
					<li className={styles.NavItem}>
						<Link url="!#" icon={<ListIcon type="secondary" />} text="Лента заказов" />
					</li>
					<li className={styles.NavItem}>
						<Link url="!#" icon={<Logo />} />
					</li>
					<li className={styles.NavItem}>
						<Link url="!#" icon={<ProfileIcon type="secondary" />} text="Личный кабинет" />
					</li>
				</ul> 
			</nav>
	  	</header>
	);
}
  
export default AppHeader;