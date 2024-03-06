import { useMemo } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-creator.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAddedIngredients, getAddedBun, getUserIsLogged } from '../../redux/selectors/selectors';
import { getOrderData } from '../../services/getOrderData';
import getOrderResults from '../../redux/selectors/getOrderResults';
import { useNavigate  } from 'react-router-dom';
import { setOrderDetails } from '../../redux/actions/orderDetailsActions';

function OrderCreator() {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addedBun = useSelector( getAddedBun );

	const userIsLogged = useSelector( getUserIsLogged );

	const addedIngredients = useSelector( getAddedIngredients );

	const orderResults = useMemo( () => 
		getOrderResults(addedBun, addedIngredients)
		, [addedIngredients, addedBun] 
	);

	
	const orderButtonClickHandler = () => {

		if (userIsLogged) 
		{
			dispatch( setOrderDetails({order: 'loading'}) )
			dispatch( getOrderData(orderResults.data) )
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