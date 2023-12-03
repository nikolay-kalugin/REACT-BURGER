import { useState, useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientCategory from '../ingredient-category/ingredient-category';
import Modal from '../modal/modal';

function BurgerIngredients({ingredients}) 
{
	const [current_tab, setCurrent] = useState('one');

	const buns = useMemo(() => ingredients.filter( obj => obj.type === 'bun' ),[ingredients]); 
	const sauces = useMemo(() => ingredients.filter( obj => obj.type === 'sauce' ),[ingredients]); 
	const mains = useMemo(() => ingredients.filter( obj => obj.type === 'main' ),[ingredients]); 

	const onClose = () => { document.querySelector('#modal').style.display = 'none' } 

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

			<ul className={`${styles.IngredientsList} custom-scroll`}>

				<IngredientCategory title={'Булки'} ingredients={buns} />
				<IngredientCategory title={'Соусы'} ingredients={sauces} />
				<IngredientCategory title={'Начинки'} ingredients={mains} />

				<Modal title="Детали ингредиента" onClose={onClose}/>

			</ul>


		</section>
	)

}

export default BurgerIngredients;