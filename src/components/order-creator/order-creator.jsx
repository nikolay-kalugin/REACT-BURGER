import { useMemo } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-creator.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAddedIngredients, getAddedBun } from '../../redux/selectors/selectors';
import { getOrderData } from '../../services/getOrderData';
import getOrderResults from '../../redux/selectors/getOrderResults'

function OrderCreator() {

	const dispatch = useDispatch();

	const addedBun = useSelector( getAddedBun );

	const addedIngredients = useSelector( getAddedIngredients );

	const orderResults = useMemo( () => 
		getOrderResults(addedBun, addedIngredients)
		, [addedIngredients, addedBun] 
	);

	
	const orderButtonClickHandler = () =>  {
		// console.log( orderResults.constructorIngredientsCounts )
		dispatch( getOrderData(orderResults.data) )
	}


	return(
		<div className={styles.OrderCreator}>
			<p className={styles.TotalPrice}>
				<span className="mr-2">{orderResults.totalPrice}</span>
				<CurrencyIcon type="primary" />
			</p>
			
			{
				( addedIngredients.length > 0 && addedBun )  &&  (

					<Button 
						htmlType="button" 
						type="primary" 
						size="large"
						onClick={ () => orderButtonClickHandler(orderResults) }
					>
						Оформить заказ
					</Button>

				) 
			}

		</div>

	)
}


export default OrderCreator;