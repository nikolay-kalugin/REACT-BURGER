import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-card.module.css';
import { useDrag } from 'react-dnd';
 
function IngredientCard({ingredient}) {

	// Drag & Drop (Draggable elem handlers)
	const [, dragRef] = useDrag({
		type: 'ingredient',
		item: ingredient,
		collect: (monitor) => {
			// console.log(ingredient)
			return {isDrag: monitor.isDragging()}
		}
	});


	// const onDragHandler = (e, obj) => {
	// 	e.dataTransfer.setData( 'text/plain', JSON.stringify(obj) );
	// 	// console.log(e.dataTransfer.getData('text'))
	// }

	return(
		<div className={styles.IngredientCard} >
			<img className={styles.IngredientImg} 
				src={ingredient.image} 
				width={240} 
				alt={`ingredient`}
				// onDragStart={ (e) => onDragHandler(e, ingredient) }
				ref={dragRef}
			/>
			<div className={styles.IngredientPriceBlock}>
				<span className={styles.IngredientPrice}>{ingredient.price}</span>
				<CurrencyIcon type="primary" />
			</div>
			<div className={styles.IngredientText}>{ingredient.name}</div>
			<Counter count={1} />
		</div>
	)

}

export default IngredientCard;