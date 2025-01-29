import React from 'react'

import styles from './style.module.scss'

interface NavigationButtonProps {
  text: string,
  disabled?: boolean,
  onClick: () => void
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ text, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={styles.navigationButton}
    >{text}</button>
  )
}

export default NavigationButton