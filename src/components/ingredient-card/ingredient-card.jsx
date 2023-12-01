import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-card.module.css';

function IngredientCard({ingredient}) {

	return(
		<>
			<li className={styles.IngredientCard} key={ingredient._id} >

				<img className={styles.IngredientImg} src={ingredient.image} width={240} alt={`ingredient`}/>
				<div className={styles.IngredientPriceBlock}>
					<span className={styles.IngredientPrice}>{ingredient.price}</span>
					<CurrencyIcon />
				</div>
				<div className={styles.IngredientText}>{ingredient.name}</div>
				<Counter count={1} />

			</li>
		</>
	)

}

export default IngredientCard;