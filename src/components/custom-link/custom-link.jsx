import styles from '../custom-link/custom-link.module.css';
import { Link } from 'react-router-dom';

function CustomLink({url, icon, text}) 
{
	// const handleOnClick = (e) => {e.preventDefault()} ; 

	return (
		<Link to={url} className={styles.NavLink} >
			<span className={styles.NavIcon}>{icon}</span>
			<p className={[styles.Text, styles.TextDefault]}>{text}</p>
		</Link>
	)
}

export default CustomLink;