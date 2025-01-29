import React from "react"
import { useNavigate } from "react-router-dom"

import styles from './style.module.scss'
import ContentWrapper from "../../shared-components/contentWrapper"
import InsuranceButton from "../../components/InsuranceButton"

import insuranceLogo from '../../assets/icons/insurance.svg'

const Insurance: React.FC = () => {

  const navigate = useNavigate()

  const handleInsuranceNavigation = () => {
    navigate('/vehicles')
  }

  return (
    <ContentWrapper title="انتخاب بیمه">
      <div className={styles.buttons}>
        <InsuranceButton
          type="button"
          text="شخص ثالث"
          disabled={false}
          icon={insuranceLogo}
          alt="لوگوی شخص ثالث"
          onClick={handleInsuranceNavigation}
        />
        <InsuranceButton
          type="button"
          text="بدنه"
          disabled={true}
          icon={insuranceLogo}
          alt="لوگوی بیمه بدنه"
        />
      </div>
    </ContentWrapper>
  )

}
export default Insurance