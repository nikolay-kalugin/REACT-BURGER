import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import styles from '../modal/modal.module.css'

import { SET_INGREDIENT_DETAILS, SET_ORDER_DETAILS } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux';

const modal = document.getElementById('modal') 


function Modal( {title, children} ) {

	const dispatch = useDispatch();

	const onClose = useCallback( () => { 
										dispatch({ type: SET_INGREDIENT_DETAILS, payload: null });
										dispatch({ type: SET_ORDER_DETAILS, payload: null });
									}  
				, [dispatch] )

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

