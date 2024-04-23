import { useMemo } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-creator.module.css';
import { useDispatch, useSelector } from '../../index';
import { getAddedIngredients, getAddedBun, getUser } from '../../redux/selectors/selectors';
import { getOrderData } from '../../services/getOrderData';
import getOrderResults from '../../redux/selectors/getOrderResults';
import { useNavigate  } from 'react-router-dom';
import { setOrderDetails } from '../../redux/actions/orderDetailsActions';

import { TOrderResults } from '../../types/types' 


function OrderCreator() {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addedBun = useSelector( getAddedBun );

	const user = useSelector( getUser );

	const addedIngredients = useSelector( getAddedIngredients );

	const orderResults = useMemo( () => 
		getOrderResults(addedBun, addedIngredients)
		, [addedIngredients, addedBun] 
	);

	
	const orderButtonClickHandler = (orderResults: TOrderResults) => {

		if(user)
		{	
			
			dispatch( setOrderDetails({
					order: 'loading',
					orderIngredients: [],
					totalPrice: 0,
					data: {
						ingredients: []
					},
					constructorIngredientsCounts: 0
				}) 
			)
			
			dispatch( getOrderData( orderResults.data ) )
		}
		else
		{
			navigate('/login');
		}
		
	
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