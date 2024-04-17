import { useState, useMemo, useRef, SetStateAction, } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientCategory from '../ingredient-category/ingredient-category';
import { useSelector } from 'react-redux';
import { getIsLoading, getIngredients } from '../../redux/selectors/selectors';

import { TIngredient } from '../../types/types' 

function BurgerIngredients() {

	const loading = useSelector( getIsLoading );

	const ingredients = useSelector( getIngredients );

	const [currentTab, setCurrentTab] = useState('one');

	// Переключение табов при скроллинге - begin
	const appScroll = document.getElementById('app');
	const elemTabs = document.getElementById('tabs');
	const refBunsList = useRef(null);
	const refSaucesList = useRef(null);
	const refMainsList = useRef(null);

	function update() {
		
		const elemBuns = refBunsList?.current
		const elemSauces = refSaucesList?.current
		const elemMains = refMainsList?.current

		/* @ts-ignore */
		const rectTabs = elemTabs?.getBoundingClientRect();
		/* @ts-ignore */
		const rectBuns = elemBuns?.getBoundingClientRect();
		/* @ts-ignore */
		const rectSauces = elemSauces?.getBoundingClientRect();
		/* @ts-ignore */
		const rectMains = elemMains?.getBoundingClientRect();

		const diffKoeff = 120;

		/* @ts-ignore */
		if ( (rectBuns?.top - rectTabs?.top) < diffKoeff ) 
		{
			setCurrentTab('one')
		}

		/* @ts-ignore */
		if ( (rectSauces?.top - rectTabs?.top) < diffKoeff ) 
		{
			setCurrentTab('two')
		}

		/* @ts-ignore */
		if ( (rectMains?.top - rectTabs?.top) < diffKoeff ) 
		{
			setCurrentTab('three')
		}

	}
	// Переключение табов при скроллинге - end
	
	
	const onTabClick = (tab: SetStateAction<string>) => {
		
		setCurrentTab(tab);
		
		switch(tab)
		{
			/* @ts-ignore */
			case 'buns': refBunsList?.current.scrollIntoView({block: "start", behavior: "smooth"}) 
				break;
			/* @ts-ignore */
			case 'sauces': refSaucesList?.current.scrollIntoView({block: "start", behavior: "smooth"})
				break;
			/* @ts-ignore */
			case 'mains': refMainsList?.current.scrollIntoView({block: "start", behavior: "smooth"})
				break;
			default: 	
		}
		
		/* @ts-ignore */
		appScroll.scrollTo( 0, 0 )
	};

	const [buns, sauces, mains] = useMemo(() => {
		return [
					ingredients.filter( (obj: TIngredient) => obj.type === 'bun' ), 
					ingredients.filter( (obj: TIngredient) => obj.type === 'sauce' ),
					ingredients.filter( (obj: TIngredient) => obj.type === 'main' )
				]
	  }, [ingredients])
	
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

				loading ? <p>Ингредиенты загружаются ...</p> 
				 
				:
				 
				ingredients.length > 0  &&  (  
				
					<article onScroll={update} className={`${styles.IngredientsList} custom-scroll`}>

						<IngredientCategory 
							id={'buns'}
							title={'Булки'} 
							ingredients={buns}
							ref={refBunsList}

						/>

						<IngredientCategory 
							id={'sauces'}
							title={'Соусы'} 
							ingredients={sauces}
							ref={refSaucesList}
						/>

						<IngredientCategory 
							id={'mains'}
							title={'Начинки'} 
							ingredients={mains}
							ref={refMainsList}
						/>

					</article>
				
				)
			
			}

		</section>
	)

}

export default BurgerIngredients;