import { useState, useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import Modal from '../modal/modal';
import IngredientCategory from '../ingredient-category/ingredient-category';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'

function BurgerIngredients({ingredients}) 
{
	const [currentTab, setCurrentTab] = useState('one');

	const buns = useMemo(() => ingredients.filter( obj => obj.type === 'bun' ),[ingredients]); 
	const sauces = useMemo(() => ingredients.filter( obj => obj.type === 'sauce' ),[ingredients]); 
	const mains = useMemo(() => ingredients.filter( obj => obj.type === 'main' ),[ingredients]); 

	const onTabClick = (tab) => {
		setCurrentTab(tab)
		const element = document.getElementById(tab);
		element && element.scrollIntoView({behavior: "smooth"});
	}


	const [ingredientDetails, setIngredientDetails] = useState(null);

	const onClose = () => { 
		setIngredientDetails( () => null );
	}

	const onClickIngredient = (ingredientID) => { 
		// console.log(ingredientID)
		const [ingredienObj] = ingredients.filter( obj => obj._id === ingredientID )
		setIngredientDetails(ingredienObj);
	}

	return (
		<section className={styles.BurgerIngredients}>

			<h1 className={styles.MainTitle}>Соберите бургер</h1>

			<div className={styles._Tabs}>
				<Tab value="one" active={currentTab === 'one'} onClick={() => onTabClick('buns')}>
					Булки
				</Tab>
				<Tab value="two" active={currentTab === 'two'} onClick={() => onTabClick('sauces')}>
					Соусы
				</Tab>
				<Tab value="three" active={currentTab === 'three'} onClick={() => onTabClick('mains')}>
					Начинки
				</Tab>
			</div>

			{
				ingredients.length !== 0  &&  
				 
				 <ul className={`${styles.IngredientsList} custom-scroll`}>
						<IngredientCategory 
							id={'buns'}
							title={'Булки'} 
							ingredients={buns}
							onClick={onClickIngredient} 
						/>
						<IngredientCategory 
							id={'sauces'}
							title={'Соусы'} 
							ingredients={sauces}
							onClick={onClickIngredient} 
						/>
						<IngredientCategory 
							id={'mains'}
							title={'Начинки'} 
							ingredients={mains}
							onClick={onClickIngredient} 
						/>	
				</ul>
				
			}
		
			{
				ingredientDetails && <Modal 
					title="Детали ингредиента" 
					onClose={onClose} 
					modalContent={ <IngredientDetails ingredientDetails={ingredientDetails} /> }>
				</Modal>
			}

		</section>
	)

}

export default BurgerIngredients;