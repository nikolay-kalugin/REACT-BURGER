import { useMemo } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-creator.module.css';
import { setOrderDetails } from '../../redux/actions/orderDetailsActions';
import { useDispatch, useSelector } from 'react-redux';
import { getAddedIngredients, getAddedBun } from '../../redux/selectors/selectors';

function OrderCreator() {

	const dispatch = useDispatch();

	const addedBun = useSelector( getAddedBun );

	const addedIngredients = useSelector( getAddedIngredients )


	// Рассчет итоговой стоимости заказа
	const totalPrice = useMemo( () => { 

		const initialValue = 0;

		let addedIngredientsPrice = 0;
		let addedBunPrice = 0;

		if ( addedIngredients.length > 0 || addedBun )
		{
			if ( addedIngredients.length > 0 ) 
			{
				addedIngredientsPrice = addedIngredients.reduce( 
					(accumulator, ingredient) => accumulator + ingredient.price,
					 initialValue,
				);
			}

			if ( addedBun )
			{
				addedBunPrice = addedBun.price * 2;
			}
		}

		return addedIngredientsPrice + addedBunPrice

	}, [addedIngredients, addedBun] );
	
	// const [total_price, dispatch] = useReducer(reducer, 0)

	return(
		<div className={styles.OrderCreator}>
			<p className={styles.TotalPrice}>
				<span className="mr-2">{totalPrice}</span>
				<CurrencyIcon type="primary" />
			</p>
			
			<Button 
				htmlType="button" 
				type="primary" 
				size="large"
				onClick={ () => dispatch( setOrderDetails(true) ) }
			>
  				Оформить заказ
			</Button>
		</div>

	)
}


export default OrderCreator;