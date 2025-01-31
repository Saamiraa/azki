import React from 'react'

import styles from './style.module.scss'

import { InsuranceButtonProps } from './types';

const InsuranceButton: React.FC<InsuranceButtonProps> = ({ type, text, disabled, onClick, icon, alt }) => {
  return (
    <button
      type={type}
      className={`${styles.submitButton} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={icon} alt={alt} className={styles.image}/>
      <span className={styles.title}>{text}</span>
    </button>
  )
}

export default InsuranceButton;