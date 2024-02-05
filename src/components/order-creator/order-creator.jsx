import { useMemo } from 'react'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-creator.module.css';
import { setOrderDetails } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAddedIngredients } from '../../redux/selectors/selectors'

function OrderCreator() {

	const dispatch = useDispatch();

	const addedIngredients = useSelector( getAddedIngredients )

	const initialValue = 0;

	const totalPrice = useMemo( () => { 

		if ( addedIngredients.length > 0 )
		{
			return addedIngredients.reduce( 
				(accumulator, ingredient) => accumulator + ingredient.price,
				 initialValue,
			);
		}
		else 
		{
			return 0;
		}
		
	}, [addedIngredients] );
	
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