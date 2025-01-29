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
    console.log('test')

  }
  const handleNavigateToVehicles = () => {
    navigate('/vehicles')
  }

  return (
    <div className={styles.insuranceProviderContainer}>
      <h3 className={styles.title}>شرکت بیمه‌گر قبلی خود را در این بخش وارد کنید.</h3>
      <div className={styles.selectItems}>
        <SelectDropdown
          value={selectedInsuranceProvider || 'شرکت بیمه‌گر قبلی'}
          data={providers}
          onChange={(e) => onProvidersClick(e.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <NavigationButton text="مرحله قبل" onClick={handleNavigateToVehicles} />
        <NavigationButton
          text="مرحله بعد"
          disabled={!selectedInsuranceProvider}
          onClick={handleProceedToNextStep}
        />
      </div>
    </div>
  )
}

export default InsuranceProvidersItem