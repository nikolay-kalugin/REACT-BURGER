import React from 'react';
import styles from './profile.module.css';

export function ProfilePage() {
	return (
		<div className={styles.wrapper}>
		  <form className={styles.form}>
			<h1 className={styles.heading}>Профиль пользователя</h1>
		  </form>
		</div>
	);
} 