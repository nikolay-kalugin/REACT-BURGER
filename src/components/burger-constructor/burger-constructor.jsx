// import { useState } from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

function BurgerConstructor(props) 
{
	const ingredients = props.ingredients; 

	return (
		<section className={styles.BurgerConstructor}>

			<ConstructorElement 
				extraClass={styles.ConstructorElement}
				type="top"
				text={ingredients[0].name}
				price={ingredients[0].price}
				thumbnail={ingredients[0].image}
				isLocked={true}
			/>

			<ul className={styles.ConstructorList} > 
				{
					ingredients.length !==0 && ingredients.map( ingredient => 
						<li key={ingredient._id}>
							<ConstructorElement 
								text={ingredient.name}
								price={ingredient.price}
								thumbnail={ingredient.image}
								isLocked={true}
							/>
						</li>

					)
				}

			</ul>

			<ConstructorElement 
				type="bottom"
				text={ingredients[0].name}
				price={ingredients[0].price}
				thumbnail={ingredients[0].image}
				isLocked={true}
			/>
						



		</section>
	)

}

export default BurgerConstructor;