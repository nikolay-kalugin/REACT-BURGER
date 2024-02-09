import doneIMG from './img/done.svg';
import styles from '../order-details/order-details.module.css';
import { useSelector } from 'react-redux';
import { getOrderDetails } from '../../redux/selectors/selectors';

function OrderDetails() {

	const orderDetails = useSelector( getOrderDetails )

	return (
		<div className={styles.OrderDetaills}>
			<p className={styles.Digits}>{orderDetails.order.number}</p>
			<p className={styles.Title}>идентификатор заказа</p>
			<img className={styles.Image} src={doneIMG} width={100} alt="doneIMG" />
			<p className={styles.TextStatus}>Ваш заказ начали готовить</p>
			<p className={styles.Text}>Дождитесь готовоности на орбитальной станции</p>
		</div>
	)
}

export default OrderDetails;