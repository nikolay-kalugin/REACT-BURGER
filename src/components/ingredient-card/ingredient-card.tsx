import { useMemo } from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-card.module.css';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import { getAddedIngredients, getAddedBun } from '../../redux/selectors/selectors';
import getOrderResults from '../../redux/selectors/getOrderResults'
import { Link, useLocation } from 'react-router-dom';

import { TIngredientProps } from '../../types/types' 


function IngredientCard({ingredient}: TIngredientProps) {

	const location = useLocation();

	const addedBun = useSelector( getAddedBun );

	const addedIngredients = useSelector( getAddedIngredients );

	const ingredientCount = useMemo( () => {

			const orderResults = getOrderResults(addedBun, addedIngredients);

			return orderResults.constructorIngredientsCounts[ingredient._id]

		}, [addedIngredients, addedBun, ingredient._id] 
	);


	/*** Drag & Drop (Drag elem handlers) ***/

	const [, dragRef] = useDrag({
		type: 'ingredient',
		item: ingredient,
		collect: (monitor) => {
			return {isDrag: monitor.isDragging()}
		}
	});


	return (

		<Link 
			to={`ingredients/${ingredient._id}`} 
			state={{ background: location }}
		>

			<div className={styles.IngredientCard} >

				<img className={styles.IngredientImg} 
					src={ingredient.image} 
					width={240}
					height={120} 
					alt={`ingredient`}
					ref={dragRef}
				/>

				<div className={styles.IngredientPriceBlock}>
					<span className={styles.IngredientPrice}>{ingredient.price}</span>
					<CurrencyIcon type="primary" />
				</div>

				<div className={styles.IngredientText}>{ingredient.name}</div>

				{
					(ingredientCount > 0) && <Counter count={ingredientCount} />
				}
				
			</div>

		</Link> 

	)

}

export default IngredientCard;