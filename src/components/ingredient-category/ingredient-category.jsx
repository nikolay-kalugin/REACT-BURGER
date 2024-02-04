import { forwardRef } from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import styles from './ingredient-category.module.css';

import { useDispatch } from 'react-redux';
import { SET_INGREDIENT_DETAILS } from '../../redux/actions/actions'

const IngredientCategory = ( {id, title, ingredients}, ref ) => {

	const dispatch = useDispatch();

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
							onClick={ () => dispatch({ type: SET_INGREDIENT_DETAILS, payload: ingredient._id }) } 
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