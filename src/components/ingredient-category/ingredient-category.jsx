import IngredientCard from '../ingredient-card/ingredient-card.jsx';
import styles from './ingredient-category.module.css';

function IngredientCategory({title, ingredients}) {

	return(
		<article>
			<h2 className={styles.IngredientsTitle}>{title}</h2>

			<ul className={styles.IngredientsBox} > 
				{
					ingredients.length !==0 && ingredients.map( ingredient => 

						<li className={styles.IngredientCard} key={ingredient._id} >
							<IngredientCard ingredient={ingredient} />
						</li>
						
					)
				}
			</ul>
		</article>
	) 
}

export default IngredientCategory;