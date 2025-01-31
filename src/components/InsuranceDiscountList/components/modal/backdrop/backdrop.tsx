import React from 'react'

import styles from './style.module.scss'

interface BackdropProps {
  onClose: () => void
}

const Backdrop: React.FC<BackdropProps> = ({ onClose }) => {
  return (
    <div className={styles.backdrop} onClick={onClose} />
  )
}

export default Backdrop