import styles from '../ingredient-details/ingredient-details.module.css'

type TIngredientDetails = {
	ingredientDetails: {
		image_large: string;
		name: string;
		calories: string | number;
		proteins: string | number;
		fat: string | number;
		carbohydrates: string | number;
	}
}

function IngredientDetails({ingredientDetails}: TIngredientDetails) {

	return (

		ingredientDetails && (

				<div className={styles.IngredientDetails}>

					<img className={styles.Image} src={ingredientDetails.image_large} width={420} alt="ingredient" />
					
					<p className={styles.Title}>{ingredientDetails.name}</p> 
					
					<div className={styles.ParametersContainer}>
						<div className={styles.Parameter}>
							<div className={styles.Text}>Калории, ккал</div>
							<div className={styles.Digits}>{ingredientDetails.calories}</div>
						</div>
						<div className={styles.Parameter}>
							<div className={styles.Text}>Белки, г</div>
							<div className={styles.Digits}>{ingredientDetails.proteins}</div>
						</div>
						<div className={styles.Parameter}>
							<div className={styles.Text}>Жиры, г</div>
							<div className={styles.Digits}>{ingredientDetails.fat}</div>
						</div>
						<div className={styles.Parameter}>
							<div className={styles.Text}>Углеводы, г</div>
							<div className={styles.Digits}>{ingredientDetails.carbohydrates}</div>
						</div>
					</div>

				</div>

			)
		
	)

}

export default IngredientDetails;