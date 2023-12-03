import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../create-order/create-order.module.css';

function CreateOrder(props) {
	return(
		<div className={styles.CreateOrder}>
			<p className={styles.TotalPrice}>
				<span className="mr-2">610</span>
				<CurrencyIcon type="primary" />
			</p>
			
			<Button htmlType="button" type="primary" size="large">
  				Оформить заказ
			</Button>
		</div>

	)
}

export default CreateOrder;