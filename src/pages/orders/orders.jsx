import React from 'react';
import styles from './orders.module.css';

export function OrdersPage() {
	return (
		<div className={styles.wrapper}>
		  <form className={styles.form}>
			<h1 className={styles.heading}>Лента заказов</h1>
		  </form>
		</div>
	);
} 