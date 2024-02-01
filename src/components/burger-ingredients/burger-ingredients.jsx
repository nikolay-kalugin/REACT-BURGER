import { useState, useMemo, useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import Modal from '../modal/modal';
import IngredientCategory from '../ingredient-category/ingredient-category';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'
import { useSelector } from 'react-redux';

function BurgerIngredients() 
{

	const ingredients = useSelector( store => store.ingredients );


	const [currentTab, setCurrentTab] = useState('one');

	const elemTabs = document.getElementById('tabs');
	const refBunsList = useRef(null);
	const refSaucesList = useRef(null);
	const refMainsList = useRef(null);

	function update() {
		
		const elemBuns = refBunsList.current
		const elemSauces = refSaucesList.current
		const elemMains = refMainsList.current

		const rectTabs = elemTabs?.getBoundingClientRect();
		const rectBuns = elemBuns?.getBoundingClientRect();
		const rectSauces = elemSauces?.getBoundingClientRect();
		const rectMains = elemMains?.getBoundingClientRect();

		// console.log("rectTabs =" , rectTabs.top ) 
		// elemBuns && console.log("rectBuns =" , rectBuns.top ) 
		// elemSauces && console.log("rectSauces =" , rectSauces.top ) 
		// elemMains && console.log("rectMains =" , rectMains.top ) 

		const diffKoeff = 120;

		if ( rectBuns.top - rectTabs.top < diffKoeff ) 
		{
			setCurrentTab('one')
		}

		if ( rectSauces.top - rectTabs.top < diffKoeff ) 
		{
			setCurrentTab('two')
		}

		if ( rectMains.top - rectTabs.top < diffKoeff ) 
		{
			setCurrentTab('three')
		}

	}
	
	useMemo( () => ingredients, [ingredients] ); 

	const buns = ingredients.filter( obj => obj.type === 'bun' );
	const sauces = ingredients.filter( obj => obj.type === 'sauce' );
	const mains = ingredients.filter( obj => obj.type === 'main' );

	const onTabClick = (tab) => {
		setCurrentTab(tab);
		const element = document.getElementById(tab);
		element && element.scrollIntoView({ behavior: 'smooth' });
	};


	const [ingredientDetails, setIngredientDetails] = useState(null);

	const onClickIngredient = (ingredientID) => { 
		
		const [ingredientObj] = ingredients.filter( obj => obj._id === ingredientID )
		// console.log(ingredientObj)
		setIngredientDetails(ingredientObj);
	}

	return (
		<section className={styles.BurgerIngredients}>

			<h1 className={styles.MainTitle}>Соберите бургер</h1>

			<div id="tabs" className={styles._Tabs}>
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
				ingredients.length > 0  && (  
				 
					<ul onScroll={update} className={`${styles.IngredientsList} custom-scroll`}>

							<IngredientCategory 
								id={'buns'}
								title={'Булки'} 
								ingredients={buns}
								onClick={onClickIngredient} 
								ref={refBunsList}

							/>
							<IngredientCategory 
								id={'sauces'}
								title={'Соусы'} 
								ingredients={sauces}
								onClick={onClickIngredient} 
								ref={refSaucesList}
							/>
							<IngredientCategory 
								id={'mains'}
								title={'Начинки'} 
								ingredients={mains}
								onClick={onClickIngredient} 
								ref={refMainsList}
							/>	
					</ul>
				
				)
			
			}
			
			{
				
				ingredientDetails && (
					<Modal title="Детали ингредиента" onClose={ () => setIngredientDetails( () => null ) } >
						<IngredientDetails ingredientDetails={ingredientDetails} />
					</Modal>
				)
			}

		</section>
	)

}

export default BurgerIngredients;