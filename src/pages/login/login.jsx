import React from 'react';
import styles from './login.module.css';

export function LoginPage() {
	return (
		<div className={styles.wrapper}>
		  <form className={styles.form}>
			<h1 className={styles.heading}>Вход</h1>
		  </form>
		</div>
	  );
	} 