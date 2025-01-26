import React from "react";

import { Button } from "./types";

import styles from './style.module.scss'

const FormButton: React.FC<Button> = ({ text }) => {
  return (
    <button
      type="submit"
      className={styles.submitButton}
    >
      {text}
    </button>
  )
}

export default FormButton;