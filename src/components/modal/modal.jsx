import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import styles from '../modal/modal.module.css'

const modal = document.getElementById('modal') 


function Modal({title, onClose, modalContent}) {

	const handleEscape = (e) => {
		// console.log(e.key);
		e.key === 'Escape' && onClose();
	}

	useEffect(() => {
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
						<CloseIcon type="primary" onClick={onClose} />
					</div>
				</div>
				<div className={styles.ModalContent}>
					{modalContent}
				</div>
			</div>
			<ModalOverlay onClose={onClose}/>
		</>,
		modal
	);
}

export default Modal;

