import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-creator.module.css';

function OrderCreator({onClickOrder}) {

	return(
		<div className={styles.OrderCreator}>
			<p className={styles.TotalPrice}>
				<span className="mr-2">610</span>
				<CurrencyIcon type="primary" />
			</p>
			
			<Button 
				htmlType="button" 
				type="primary" 
				size="large"
				onClick={onClickOrder}
			>
  				Оформить заказ
			</Button>
		</div>

	)
}

export default OrderCreator;