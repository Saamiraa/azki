import React from "react";

import { ButtonProps } from "./types";

import styles from './style.module.scss'

const Button: React.FC<ButtonProps> = ({ type, text, disabled,onClick }) => {
  return (
    <button
      type={type}
      className={styles.submitButton}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;