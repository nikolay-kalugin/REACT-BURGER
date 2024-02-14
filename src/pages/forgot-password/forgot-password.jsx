import React from 'react';
import styles from './forgot-password.module.css';

export function ForgotPasswordPage() {
	return (
		<div className={styles.wrapper}>
		  <form className={styles.form}>
			<h1 className={styles.heading}>Страница забыл пароль</h1>
		  </form>
		</div>
	);
} 