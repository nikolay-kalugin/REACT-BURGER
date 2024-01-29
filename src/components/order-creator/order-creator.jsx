import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-creator.module.css';

function OrderCreator({onClickOrder}) {

	const total_price = 0

	// const ingredients = ingredients_arr.filter( obj => obj ) // obj.type === 'bun'

	// function reducer( total_price, action ) {
	// 	switch (action.type) 
	// 	{
	// 		case 'increment': 
	// 			const sum = ingredients.reduce( (accumulator, ingredient) => 
	// 					{  
							 
	// 						const returns = accumulator + ingredient.price;
	// 						// console.log( returns );
	// 						return returns;
	// 					}
					
	// 			, total_price) 
	// 			return sum;
	// 		default: 
	// 			throw new Error(`Unknown action ${action.type}`);	
	// 	}
		

	// }

	// const [total_price, dispatch] = useReducer(reducer, 0)

	// useEffect(() => dispatch({ type: 'increment' }), [])

	return(
		<div className={styles.OrderCreator}>
			<p className={styles.TotalPrice}>
				<span className="mr-2">{total_price}</span>
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