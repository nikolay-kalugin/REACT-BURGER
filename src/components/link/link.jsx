import styles from '../link/link.module.css';

function Link({url, icon, text}) 
{
	return(
		<a className={styles.NavLink} href={url}>
			<span className={styles.NavIcon}>{icon}</span>
			<p className={[styles.Text, styles.TextDefault]}>{text}</p>
		</a>
	)
}

export default Link;