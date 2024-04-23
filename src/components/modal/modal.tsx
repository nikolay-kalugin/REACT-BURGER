import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import styles from '../modal/modal.module.css'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from '../../index';
import { setOrderDetails }  from '../../redux/actions/orderDetailsActions'
import { getOrderIsLoading, getOrderDetails } from '../../redux/selectors/selectors';

import { TModalProps } from '../../types/types' 
 

const modal = document.getElementById('modal') as Element; 


function Modal( {title, children} : TModalProps ) {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const orderIsLoading = useSelector( getOrderIsLoading );
	const orderDetails = useSelector( getOrderDetails );

	const handleModalClose = useCallback( () => {
			// Возвращаемся к предыдущему пути при закрытии модалки
			if( orderIsLoading === false && orderDetails === null )
			{
				navigate(-1);
			}
		}, [navigate, orderIsLoading, orderDetails] )


	const onClose = useCallback( () => { 
			handleModalClose(); 
			dispatch(setOrderDetails({
				order: 'loading',
				orderIngredients: [],
				totalPrice: 0,
				data: {
					ingredients: []
				},
				constructorIngredientsCounts: 0
			}));
		}, [handleModalClose, dispatch] )


	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			e.key === 'Escape' && onClose();
		}

		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
		}
		 
	}, [onClose] );


	return createPortal (
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

