import { forwardRef } from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import styles from './ingredient-category.module.css';

import { useDispatch } from 'react-redux';
import { setIngredientDetails } from '../../redux/actions/ingredientDetailsActions'

const IngredientCategory = ( {id, title, ingredients}, ref ) => {

	const dispatch = useDispatch();

	return (

		<>

			<h2 ref={ref} className={styles.IngredientsTitle}>{title}</h2>

			<ul id={id} className={styles.IngredientsBox} > 
				{
					ingredients.length !==0 && ingredients.map( ingredient => 

						<li 
							className={styles.IngredientCard} 
							key={ingredient._id}
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