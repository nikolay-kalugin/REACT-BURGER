import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { deleteIngredientConstructor, changeIngredientsConstructor } from '../../redux/actions/constructorActions';
import styles from './constructor-ingredient-card.module.css';
import { useRef } from 'react';

import { useDispatch, useSelector } from '../../index';
import { useDrag, useDrop } from 'react-dnd';

import { getAddedIngredients } from '../../redux/selectors/selectors';

import { TIngredientProps } from '../../types/types' 


function ConstructorIngredientCard({ingredient}: TIngredientProps) {

	const dispatch = useDispatch();

	const addedIngredients = useSelector( getAddedIngredients );

	const ref = useRef(null);

	
	/*** Drag & Drop (Drag elem handlers) ***/

	const [{isDragging}, drag] = useDrag({
		type: 'constructor-ingredient',
		item: ingredient,
		collect: (monitor) => {
			return { isDragging: monitor.isDragging() }
		}
	})

	const opacity = isDragging ? 0 : 1;

	const [, drop] = useDrop({
		accept: 'constructor-ingredient',
		hover: (itemDrag, monitor) => {

			if(!ref.current) { return }

			const dragObjIndex = addedIngredients.indexOf(itemDrag)
			const dropObjIndex = addedIngredients.indexOf(ingredient)

			if (dragObjIndex === dropObjIndex) { return }

			// @ts-ignore
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

			const clientOfSet = monitor.getClientOffset();

			let hoverClientY = 0
			
			if (clientOfSet !== null) {
				hoverClientY = clientOfSet.y - hoverBoundingRect.top;
			}

			if( dragObjIndex < dropObjIndex && hoverClientY < hoverMiddleY) { return }
			if( dragObjIndex > dropObjIndex && hoverClientY > hoverMiddleY) { return }

			dispatch( changeIngredientsConstructor( dragObjIndex, dropObjIndex ) );
			
		}
	})

	drag(drop(ref));


	return (		
		<div 
			ref={ref} 
			style={{opacity}}
		>

			<span className={styles.ConstructorListIcon} >	
				<DragIcon type="primary" />
			</span>
		
			<ConstructorElement 
				extraClass={styles.ConstructorListElement}
				text={ingredient.name}
				price={ingredient.price}
				thumbnail={ingredient.image}
				isLocked={false}
				handleClose={ () => dispatch( deleteIngredientConstructor(ingredient.id) ) }
			/>
		
		</div>								
	)

}

export default ConstructorIngredientCard;