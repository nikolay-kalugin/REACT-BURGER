import React from 'react';
import styles from './ingredients.module.css';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';

export function IngredientsPage() {

	const ingredientDetails = {
		
		"_id": "643d69a5c3f7b9001cfa093c",
		"name": "Краторная булка N-200i",
		"type": "bun",
		"proteins": 80,
		"fat": 24,
		"carbohydrates": 53,
		"calories": 420,
		"price": 1255,
		"image": "https://code.s3.yandex.net/react/code/bun-02.png",
		"image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
		"image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
		"__v": 0
		
	}

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