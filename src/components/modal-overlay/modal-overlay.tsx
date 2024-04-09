import styles from '../modal-overlay/modal-overlay.module.css'

// @ts-ignore
function ModalOverlay({onClose}) {
	return (
		<div 
			className={styles.ModalOverlay} 
			onClick={onClose}
		>

		</div>
	)
}

export default ModalOverlay;