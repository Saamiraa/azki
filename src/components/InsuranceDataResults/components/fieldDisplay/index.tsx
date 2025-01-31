import React from 'react'
import styles from './style.module.scss'

interface FieldDisplayProps {
  label: string
  value: string | null
  fallback: string
}

const FieldDisplay: React.FC<FieldDisplayProps> = ({ label, value, fallback }) => {
  return (
    <>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value || <span className={styles.error}>{fallback}</span>}</div>
    </>
  )
}

export default FieldDisplay
