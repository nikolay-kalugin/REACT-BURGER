import doneIMG from './img/done.svg';
import styles from '../order-details/order-details.module.css';

function OrderDetails({orderDetails}) {
	return (
		<div className={styles.OrderDetaills}>
			<p className={styles.Digits}>034536</p>
			<p className={styles.Title}>идентификатор заказа</p>
			<img className={styles.Image} src={doneIMG} width={100} alt="doneIMG" />
			<p className={styles.TextStatus}>Ваш заказ начали готовить</p>
			<p className={styles.Text}>Дождитесь готовоности на орбитальной станции</p>
		</div>
	)
}

export default OrderDetails;