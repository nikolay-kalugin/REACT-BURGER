import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import CustomLink from '../custom-link/custom-link';



function AppHeader() 
{
	return (
	  	<header className={styles.Header}>
			<nav className={styles.Nav}>
				<ul className={styles.NavList}>
					<li className={styles.NavItem}>
						<CustomLink 
							url="/" 
							icon={<BurgerIcon type="primary" />} 
							text="Конструктор" 
						/>
					</li>
					<li className={styles.NavItem}>
						<CustomLink 
							url="orders" 
							icon={<ListIcon type="secondary" />} 
							text="Лента заказов" 
					/>
					</li>
					<li className={styles.NavItem}>
						<CustomLink 
							url="/" 
							icon={<Logo />} 
					/>
					</li>
					<li className={styles.NavItem}>
						<CustomLink 
							url="/profile" 
							icon={<ProfileIcon type="secondary" />} 
							text="Личный кабинет" 
						/>
					</li>
				</ul> 
			</nav>
	  	</header>
	);
}
  
export default AppHeader;