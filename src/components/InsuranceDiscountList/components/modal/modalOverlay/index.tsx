import React from 'react';

import styles from './style.module.scss'

interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default ModalOverlay