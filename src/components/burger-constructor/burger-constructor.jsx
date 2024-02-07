import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderCreator from '../order-creator/order-creator';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import styles from './burger-constructor.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredient } from '../../redux/actions/constructorActions';
import { getAddedIngredients, getOrderDetails } from '../../redux/selectors/selectors'



function BurgerConstructor() { 

	const dispatch = useDispatch();

	const addedIngredients = useSelector( getAddedIngredients );

	const orderDetails = useSelector( getOrderDetails );

	return (
		<section className={styles.BurgerConstructor}>

			<article className={styles.MainConstructorList}>

				{/* <ConstructorElement 
					extraClass={styles.ConstructorListElement}
					type="top"
					text={ingredients[0].name}
					price={ingredients[0].price}
					thumbnail={ingredients[0].image}
					isLocked={true}
				/> */}

				{ addedIngredients.length > 0  &&  (
					<ul className={`${styles.MiddleConstructorList} custom-scroll`} > 
						{
							addedIngredients.map( ingredient => (
								<li key={ingredient.id} >
									<DragIcon type="primary" />
									<ConstructorElement 
										extraClass={styles.ConstructorListElement}
										text={ingredient.name}
										price={ingredient.price}
										thumbnail={ingredient.image}
										isLocked={false}
										handleClose={ () => dispatch(deleteIngredient(ingredient.id)) }
									/>
								</li>

						))}
					
					</ul>
				)}

				{/* <ConstructorElement 
					extraClass={styles.ConstructorListElement}
					type="bottom"
					text={ingredients[0].name}
					price={ingredients[0].price}
					thumbnail={ingredients[0].image}
					isLocked={true}
				/> */}


			</article>

			<OrderCreator />

			{ 
				orderDetails && (
					<Modal>
							<OrderDetails  orderDetails={orderDetails} />
					</Modal>
				)
			}
			
		</section>
	)

}

export default BurgerConstructor;