import { forwardRef } from 'react';

import IngredientCard from '../ingredient-card/ingredient-card';
import styles from './ingredient-category.module.css';

const IngredientCategory = ( {id, title, ingredients, onClick}, ref ) => {

	const onClickIngredient = ( ingredientID ) => {
		onClick( ingredientID )
	};

	return(
		<article>
			<h2 ref={ref} className={styles.IngredientsTitle}>{title}</h2>

			<ul 
				id={id} 
				className={styles.IngredientsBox} 
			> 
				{
					ingredients.length !==0 && ingredients.map( ingredient => 

						<li 
							className={styles.IngredientCard} 
							key={ingredient._id}
							onClick={() => onClickIngredient(ingredient._id)} 
						>
							<IngredientCard 
								ingredient={ingredient}
							 />
						</li>
						
					)
				}

			</ul>

		</article>
	) 
}

export default forwardRef(IngredientCategory);