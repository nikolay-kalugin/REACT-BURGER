import '../AppHeader/app-header.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
	return (
	  <header className="AppHeader">
		<nav className="AppNav">
			123
			<ul>
				<li>
					<a href="!#">
						<span><BurgerIcon type="primary" /></span>
						<p className="text text_type_main-default">Конструктор</p>
					</a>
				</li>
				<li>
					<a href="!#">
						<span><ListIcon type="secondary" /></span>
						<p className="text text_type_main-default">Лента заказов</p>
					</a>
				</li>
				<li>
					<a href="!#">
						<Logo />
					</a>
				</li>
				<li>
					<a href="!#">
						<span><ProfileIcon type="secondary" /></span>
						<p className="text text_type_main-default">Лента заказов</p>
					</a>
				</li>
			</ul> 
		</nav>
	  </header>
	);
  }
  
  export default AppHeader;