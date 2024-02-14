import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import styles from '../modal/modal.module.css'

import { setIngredientDetails } from '../../redux/actions/ingredientDetailsActions'
import { setOrderDetails } from '../../redux/actions/orderDetailsActions'
import { useDispatch } from 'react-redux';

const modal = document.getElementById('modal') 


function Modal( {title, children} ) {

	const dispatch = useDispatch();

	const onClose = useCallback( () => { 
										dispatch(setIngredientDetails(null));
										dispatch(setOrderDetails(null));
								}, [dispatch] )

	useEffect(() => {
		const handleEscape = (e) => {
			e.key === 'Escape' && onClose();
		}

		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
		}
		 
	}, [onClose] );


	return createPortal(
		<>
			<div className={styles.Modal}>
				<div className={styles.ModalHeader}>
					<h2>{title}</h2>
					<div className={styles.CloseIcon}>
						<CloseIcon type="primary" onClick={ () => onClose() } 
						/>
					</div>
				</div>
				<div className={styles.ModalContent}>
					{children}
				</div>
			</div>

			<ModalOverlay onClose={onClose} />

		</>, modal
	);
}

export default Modal;

