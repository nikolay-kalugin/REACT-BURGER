
import { useState } from 'react';
import { Tab, ConstructorElement, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';


function BurgerIngredients(props) 
{
	const [current_tab, setCurrent] = useState('one');
	const ingredients = props.ingredients // props.ingredients.filter( obj => obj.type === 'main' ); // 'bun'

	// console.log(ingredients)

	return (
		<section className={styles.BurgerIngredients}>

			<h1 className={styles.MainTitle}>Соберите бургер</h1>

			<div className={styles._Tabs}>
				<Tab value="one" active={current_tab === 'one'} onClick={setCurrent}>
					Булки
				</Tab>
				<Tab value="two" active={current_tab === 'two'} onClick={setCurrent}>
					Соусы
				</Tab>
				<Tab value="three" active={current_tab === 'three'} onClick={setCurrent}>
					Начинки
				</Tab>
			</div>

			<div>
				<h2>Бургеры</h2>

				<ul className={styles.IngredientsList} custom-scroll > 
					{
						ingredients.length !==0 && ingredients.map( ingredient => 
							<li key={ingredient._id}>
								<ConstructorElement 
									text={ingredient.name}
									price={ingredient.price}
									thumbnail={ingredient.image}
									isLocked={undefined}>

	 								<Counter count={1} size="default" extraClass="m-1" />

								</ConstructorElement>
									
							
								
							</li>
						)
					}
				</ul>

			</div>


		</section>
	)

}

export default BurgerIngredients;