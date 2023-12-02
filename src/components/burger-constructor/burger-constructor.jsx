import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import CreateOrder from '../create-order/create-order.jsx'
import styles from './burger-constructor.module.css';

function BurgerConstructor({ingredients}) { 

	return (
		<section className={styles.BurgerConstructor}>

			<article className={styles.MainConstructorList}>
				<ConstructorElement 
					extraClass={styles.ConstructorListElement}
					type="top"
					text={ingredients[0].name}
					price={ingredients[0].price}
					thumbnail={ingredients[0].image}
					isLocked={true}
				/>

				<ul className={`${styles.MiddleConstructorList} custom-scroll`} > 
					{
						ingredients.length !==0 && ingredients.map( ingredient => 
							<li key={ingredient._id}>
								<DragIcon type="primary" />
								<ConstructorElement 
									extraClass={styles.ConstructorListElement}
									text={ingredient.name}
									price={ingredient.price}
									thumbnail={ingredient.image}
									isLocked={false}
								/>
							</li>

						)
					}

				</ul>

				<ConstructorElement 
					extraClass={styles.ConstructorListElement}
					type="bottom"
					text={ingredients[0].name}
					price={ingredients[0].price}
					thumbnail={ingredients[0].image}
					isLocked={true}
				/>
			</article>

			<CreateOrder />

		</section>
	)

}

export default BurgerConstructor;