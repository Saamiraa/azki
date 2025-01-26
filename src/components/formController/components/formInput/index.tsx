import React from 'react'

import { Input } from './types'

import styles from './style.module.scss'

const FormInput: React.FC<Input> = ({ type, name, id, value, error, onChange, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
      {error[name] && <p className={styles.error}>{error[name]}</p>}
    </div>
  )
}

export default FormInput