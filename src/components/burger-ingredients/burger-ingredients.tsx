import { useState, useMemo, useRef, SetStateAction, } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientCategory from '../ingredient-category/ingredient-category';
import { useSelector } from '../../index';
import { getIsLoading, getIngredients } from '../../redux/selectors/selectors';

import { TIngredient } from '../../types/types' 

function BurgerIngredients() {

	const loading = useSelector( getIsLoading );

	const ingredients = useSelector( getIngredients );

	const [currentTab, setCurrentTab] = useState('one');

	// Переключение табов при скроллинге - begin
	const appScroll = document.getElementById('app');
	const elemTabs = document.getElementById('tabs');

	const refBunsList = useRef<HTMLDivElement>(null);
	const refSaucesList = useRef<HTMLDivElement>(null);
	const refMainsList = useRef<HTMLDivElement>(null);

	function update() : void {
		
		const elemBuns: HTMLDivElement | null = refBunsList?.current
		const elemSauces: HTMLDivElement | null = refSaucesList?.current
		const elemMains: HTMLDivElement | null = refMainsList?.current

		
		const rectTabs: DOMRect | undefined = elemTabs?.getBoundingClientRect();
		const rectBuns: DOMRect | undefined = elemBuns?.getBoundingClientRect();
		const rectSauces: DOMRect | undefined = elemSauces?.getBoundingClientRect();
		const rectMains: DOMRect | undefined = elemMains?.getBoundingClientRect();

		const diffKoeff = 120;

	
		if (rectBuns && rectTabs) 
		{
			if ( (rectBuns.top - rectTabs.top) < diffKoeff ) 
			{
				setCurrentTab('one')
			}
		}


		if (rectSauces && rectTabs) 
		{
			if ( (rectSauces.top - rectTabs.top) < diffKoeff ) 
			{
				setCurrentTab('two')
			}
		
		}

		if (rectMains && rectTabs) 
		{
			if ( (rectMains.top - rectTabs.top) < diffKoeff ) 
			{
				setCurrentTab('three')
			}
		}

	}
	// Переключение табов при скроллинге - end
	
	
	const onTabClick = (tab: SetStateAction<string>) => {
		
		setCurrentTab(tab);
		
		if(refBunsList.current != null && refSaucesList.current != null && refMainsList.current) 
		{
			switch(tab)
			{
				case 'buns': refBunsList.current.scrollIntoView({block: "start", behavior: "smooth"}) 
					break;
				case 'sauces': refSaucesList?.current.scrollIntoView({block: "start", behavior: "smooth"})
					break;
				case 'mains': refMainsList?.current.scrollIntoView({block: "start", behavior: "smooth"})
					break;
				default: 	
			}
		}

		if ( appScroll != null )  
		{
			appScroll.scrollTo( 0, 0 )
		}
	

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