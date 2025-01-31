import React from 'react'

import styles from './style.module.scss'

import icon from '../../assets/icons/arrow.svg'

interface NavigationButtonProps {
  text: string,
  disabled?: boolean,
  onClick: () => void,
  iconPosition?: 'left' | 'right';
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ text, disabled, iconPosition, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={styles.navigationButton}
    >
      {iconPosition === 'left' && (
        <div className={styles.ButtonArrow}>
          {text}
          <img src={icon} alt="Arrow" className={styles.iconLeft} />
        </div>
      )}
      {iconPosition === 'right' && (
        <div className={styles.ButtonArrow}>
          <img src={icon} alt="Arrow" className={styles.iconRight} />
          {text}
        </div>
      )}
    </button>
  )
}

export default NavigationButton