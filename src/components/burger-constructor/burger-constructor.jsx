import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderCreator from '../order-creator/order-creator';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import styles from './burger-constructor.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addIngredientConstructor, deleteIngredientConstructor } from '../../redux/actions/constructorActions';
import { getAddedIngredients, getAddedBun, getOrderDetails } from '../../redux/selectors/selectors';
import { useDrop } from 'react-dnd';

function BurgerConstructor() { 

	const dispatch = useDispatch();

	const addedBun = useSelector( getAddedBun );

	const addedIngredients = useSelector( getAddedIngredients );

	const orderDetails = useSelector( getOrderDetails );


	// Drag & Drop (Targer elem handlers)
	let border = null;

	const [{canDrop}, dropRef] = useDrop(() => ({
		accept: 'ingredient',
		drop: (ingredient) => {
			dispatch( addIngredientConstructor(ingredient) )
		},
		collect: (monitor) => ({ 
			canDrop: monitor.canDrop()
		}),
	}));

	if (canDrop) 
	{
		// border = '1px solid blue'  
	}



	// const onDropHandler = (e) => {
	// 	// console.log(e.dataTransfer.getData('text'))
	// 	const drag_obj =  JSON.parse(e.dataTransfer.getData('text'))
	// 	// console.log(drag_obj)
	// 	dispatch(addIngredientConstructor(drag_obj));
	// }


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
							style={{border}}
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
							style={{border}}
						>
							Выберите начинку
						</div>
					) : (
						<ul className={`${styles.MiddleConstructorList} custom-scroll`} > 
							{
								addedIngredients.map( ingredient => (
									<li key={ingredient.id}>

										<DragIcon type="primary" 
											// onDragStart={ () => console.log(1) }
											onClick={ () => console.log(1) }
										/>
										
										<ConstructorElement 
											extraClass={styles.ConstructorListElement}
											text={ingredient.name}
											price={ingredient.price}
											thumbnail={ingredient.image}
											isLocked={false}
											handleClose={ () => dispatch( deleteIngredientConstructor(ingredient.id) ) }
										/>

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
							style={{border}}
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