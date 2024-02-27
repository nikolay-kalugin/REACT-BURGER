import { useState, useMemo, useRef, } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientCategory from '../ingredient-category/ingredient-category';
import { useSelector } from 'react-redux';
import { getIsLoading, getIngredients } from '../../redux/selectors/selectors';

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

		const rectTabs = elemTabs?.getBoundingClientRect();
		const rectBuns = elemBuns?.getBoundingClientRect();
		const rectSauces = elemSauces?.getBoundingClientRect();
		const rectMains = elemMains?.getBoundingClientRect();

		const diffKoeff = 120;

		if ( (rectBuns.top - rectTabs.top) < diffKoeff ) 
		{
			setCurrentTab('one')
		}

		if ( (rectSauces.top - rectTabs.top) < diffKoeff ) 
		{
			setCurrentTab('two')
		}

		if ( (rectMains.top - rectTabs.top) < diffKoeff ) 
		{
			setCurrentTab('three')
		}

	}
	// Переключение табов при скроллинге - end
	
	
	const onTabClick = (tab) => {
		
		setCurrentTab(tab);
		
		switch(tab)
		{
			case 'buns': refBunsList?.current.scrollIntoView({block: "start", behavior: "smooth"}) 
				break;
			case 'sauces': refSaucesList?.current.scrollIntoView({block: "start", behavior: "smooth"})
				break;
			case 'mains': refMainsList?.current.scrollIntoView({block: "start", behavior: "smooth"})
				break;
			default: 	
		}
		
		appScroll.scrollTo( 0, 0 )
	};

	const [buns, sauces, mains] = useMemo(() => {
		return [
					ingredients.filter( obj => obj.type === 'bun' ), 
					ingredients.filter( obj => obj.type === 'sauce' ),
					ingredients.filter( obj => obj.type === 'main' )
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

				loading ? <p>Данные загружаются...</p> 
				 
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