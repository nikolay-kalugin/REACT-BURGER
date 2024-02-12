import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorIngredientCard from '../constructor-ingredient-card/constructor-ingredient-card';
import OrderCreator from '../order-creator/order-creator';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import styles from './burger-constructor.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addIngredientConstructor } from '../../redux/actions/constructorActions';
import { getAddedIngredients, getAddedBun, getOrderDetails } from '../../redux/selectors/selectors';
import { useDrop } from 'react-dnd';

function BurgerConstructor() { 

	const dispatch = useDispatch();

	const addedBun = useSelector( getAddedBun );

	const addedIngredients = useSelector( getAddedIngredients );

	const orderDetails = useSelector( getOrderDetails );


	/*** Drag & Drop (Drop elem handlers) ***/

	const [, dropRef] = useDrop(() => ({
		accept: 'ingredient',
		drop: (ingredient) => {
			dispatch( addIngredientConstructor(ingredient) )
		},
		collect: (monitor) => ({ 
			canDrop: monitor.canDrop()
		}),
	}));


	return (
		<section className={styles.BurgerConstructor}>

			<article 
				className={styles.MainConstructorList} 
				ref={dropRef}
			>

				{
					addedBun === null  ?  
					( 
						<div 
							className={`${styles.ConstructorListElementCustom} ${styles.modificatorUP}`}
						>
							Выберите булки
						</div>	
					) : (
						<ConstructorElement 
							extraClass={styles.ConstructorListElement}
							type="top"
							text={addedBun.name}
							price={addedBun.price}
							thumbnail={addedBun.image}
							isLocked={true}
						/> 
					)
				}

				{	
					addedIngredients.length === 0  ?  
					(
						<div 
							className={`${styles.ConstructorListElementCustom} ${styles.modificatorCenter}`}
						>
							Выберите начинку
						</div>
					) : (
						<ul className={`${styles.MiddleConstructorList} custom-scroll`} > 
							{
								addedIngredients.map( ingredient =>  (

									<li key={ingredient.id}>

										<ConstructorIngredientCard ingredient={ingredient} />

									</li>

								))
							}
						</ul>
					)
				}

				{
					addedBun === null  ?  ( 
						<div 
							className={`${styles.ConstructorListElementCustom} ${styles.modificatorBottom}`}
						>
							Выберите булки
						</div>	
					) : (
						<ConstructorElement 
							extraClass={styles.ConstructorListElement}
							type="bottom"
							text={addedBun.name}
							price={addedBun.price}
							thumbnail={addedBun.image}
							isLocked={true}
						/>
					)
				}

			</article>

			<OrderCreator />

			{ 
				orderDetails  &&  (
					<Modal>
							<OrderDetails  orderDetails={orderDetails} />
					</Modal>
				)
			}
			
		</section>
	)

}

export default BurgerConstructor;