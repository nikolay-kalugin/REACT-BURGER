import React from 'react';
import styles from './ingredients.module.css';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIngredients } from '../../redux/selectors/selectors';

import { TIngredient } from '../../types/types' 

export function IngredientsPage() {

	let ingredientDetails = null;

	const {ingredientID} = useParams();
	
	const ingredients = useSelector( getIngredients );

	[ingredientDetails] = ingredients.filter( (ingredient: TIngredient) => String(ingredient._id) === ingredientID )

	return (
		ingredientDetails && (
			<div className={styles.Page}>
				<div className={styles.Wrapper}>
					<h2>Детали ингредиента</h2>
					<IngredientDetails ingredientDetails={ingredientDetails} />
				</div>
			</div>

		)
	);
} 