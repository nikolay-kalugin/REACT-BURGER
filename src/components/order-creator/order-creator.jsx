import { useMemo } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-creator.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAddedIngredients, getAddedBun, } from '../../redux/selectors/selectors';
import { getOrderData } from '../../services/getOrderData';

function OrderCreator() {

	const dispatch = useDispatch();

	const addedBun = useSelector( getAddedBun );

	const addedIngredients = useSelector( getAddedIngredients );



	// Рассчет итоговой стоимости заказа
	const orderResults = useMemo( () => { 

		let orderIngredients = [];
		let ingredientsIDs = []

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

				addedIngredients.forEach( (addedIngredient) => {
					orderIngredients = [...orderIngredients, addedIngredient];
				});
				
			}

			if ( addedBun )
			{
				addedBunPrice = addedBun.price * 2;
				orderIngredients = [addedBun, ...orderIngredients, addedBun] 
			}
		}


		orderIngredients.map( (ingredient) => {
			return ingredientsIDs = [...ingredientsIDs, ingredient._id]
		});


		return {
			totalPrice: addedIngredientsPrice + addedBunPrice,
			data: {
				ingredients: ingredientsIDs
			}
		}

	}, [addedIngredients, addedBun] );
	
	// const [total_price, dispatch] = useReducer(reducer, 0)

	const orderButtonClickHandler = () =>  {
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