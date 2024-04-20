import { LegacyRef, forwardRef } from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import styles from './ingredient-category.module.css';

import { useDispatch } from '../../index';
import { setIngredientDetails } from '../../redux/actions/ingredientDetailsActions'
import { TIngredientCategoryProps } from '../../types/types' 


const IngredientCategory = ( {id, title, ingredients} : TIngredientCategoryProps, ref: LegacyRef<HTMLHeadingElement> | undefined ) => {

	const dispatch = useDispatch();

	return (

		<>

			<h2 ref={ref} className={styles.IngredientsTitle}>{title}</h2>

			<ul id={id} className={styles.IngredientsBox} > 
				{
					ingredients.length !==0 && ingredients.map( ingredient => 

						<li 
							key={ingredient._id}
							className={styles.IngredientCard} 	
							onClick={ () => { dispatch(setIngredientDetails(ingredient)) } } 
						>

							<IngredientCard 
								ingredient={ingredient}
							/>

						</li>
					)
				}
			</ul>

		</>

	) 
}

export default forwardRef(IngredientCategory);