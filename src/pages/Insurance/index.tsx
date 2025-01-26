import React from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../shared-components/button"

import styles from './style.module.scss'

const Insurance: React.FC = () => {

  const navigate = useNavigate()

  const handleInsuranceNavigation = () => {
    navigate('/vehicles')
  }


  return (
    <div className={styles.buttonContainer}>
      <Button type="button" text="بیمه شخص ثالث" onClick={handleInsuranceNavigation} />
      <Button type="button" text="بیمه بدنه" disabled={true} />
    </div>
  )

}
export default Insurance