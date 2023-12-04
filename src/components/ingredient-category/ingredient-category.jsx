import IngredientCard from '../ingredient-card/ingredient-card';
import styles from './ingredient-category.module.css';

function IngredientCategory({id, title, ingredients, onClick}) {

	const onClickIngredient = ( ingredientID ) => {
		onClick( ingredientID )
	};

	return(
		<article>
			<h2 className={styles.IngredientsTitle}>{title}</h2>

			<ul id={id} className={styles.IngredientsBox} > 
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

export default IngredientCategory;