/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import SelectDropdown from '../../../../shared-components/selectDropdown'
import NavigationButton from '../../../../shared-components/navigationButton'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'
import { InsuranceProvider } from '../../types'
import { useNavigate } from 'react-router-dom'

interface InsuranceProvidersItemProps {
  providers: InsuranceProvider[];
  onProvidersClick: (providerTitle: string) => void
}

const InsuranceProvidersItem: React.FC<InsuranceProvidersItemProps> = ({ providers, onProvidersClick }) => {

  const selectedInsuranceProvider = useSelector((state: any) => state.providers.selectedInsuranceProvider)

  const navigate = useNavigate()

  const handleProceedToNextStep = () => {
    navigate('/insurance-discount')
  }
  const handleNavigateToVehicles = () => {
    navigate('/vehicles')
  }

  return (
    <div className={styles.insuranceProviderContainer}>
      <h3 className={styles.title}>شرکت بیمه‌گر قبلی خود را در این بخش وارد کنید.</h3>
      <div className={styles.selectItems}>
        <SelectDropdown
          value={selectedInsuranceProvider || 'درصد تخفیف ثالث'}
          data={providers}
          onChange={(e) => onProvidersClick(e.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <NavigationButton
          text="مرحله قبل"
          onClick={handleNavigateToVehicles}
          iconPosition="right"
        />
        <NavigationButton
          text="مرحله بعد"
          disabled={!selectedInsuranceProvider}
          onClick={handleProceedToNextStep}
          iconPosition="left"
        />
      </div>
    </div>
  )
}

export default InsuranceProvidersItem