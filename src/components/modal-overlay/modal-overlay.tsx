import styles from '../modal-overlay/modal-overlay.module.css'
import { TModalProps } from '../../types/types'


function ModalOverlay ({onClose}: TModalProps ) {
	return (
		<div 
			className={styles.ModalOverlay} 
			onClick={onClose}
		>

		</div>
	)
}

export default ModalOverlay;