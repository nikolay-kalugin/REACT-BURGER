import {FormEvent} from 'react';
import styles from './orders.module.css';

export function OrdersPage() {
	return (
		<div className={styles.wrapper}>
			<form 
				className={styles.form}
				onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); }}
			>
				<h2 className={styles.heading}>История заказов</h2>
		  	</form>
		</div>
	);
} 