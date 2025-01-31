import React from 'react'

import { useInsuranceData } from './useInsuranceData'

import Modal from '../InsuranceDiscountList/components/modal'

import FieldDisplay from './components/fieldDisplay'

import styles from './style.module.scss'

interface InsuranceDataResultsProps {
  onClose: () => void
}

const InsuranceDataResults: React.FC<InsuranceDataResultsProps> = ({ onClose }) => {
  const {
    firstName, lastName, mobileNumber, userPassword,
    selectedCar, carUsageType, selectedInsuranceProvider,
    selectedInsuranceDiscount, selectedDriverDiscount
  } = useInsuranceData()

  return (
    <Modal onClose={onClose}>
      <h4 className={styles.header}>{`اطلاعات تکمیل شده توسط ${firstName || 'کاربر'}`}</h4>

      <div className={styles.resultContainer}>
        <FieldDisplay label="نام" value={firstName} fallback="نامی توسط شما انتخاب نشده" />
        <FieldDisplay label="نام خانوادگی" value={lastName} fallback="نام خانوادگی وارد نشده" />
        <FieldDisplay label="شماره همراه" value={mobileNumber} fallback="شماره همراه وارد نشده" />
        <FieldDisplay label="رمز عبور" value={userPassword} fallback="رمز عبور وارد نشده" />
        <FieldDisplay label="خودرو انتخاب شده" value={selectedCar} fallback="خودرویی انتخاب نشده" />
        <FieldDisplay label="نوع استفاده از خودرو" value={carUsageType} fallback="مشخص نشده" />
        <FieldDisplay label="شرکت بیمه انتخاب شده" value={selectedInsuranceProvider} fallback="انتخاب نشده" />
        <FieldDisplay label="تخفیف بیمه" value={selectedInsuranceDiscount} fallback="انتخاب نشده" />
        <FieldDisplay label="تخفیف راننده" value={selectedDriverDiscount} fallback="انتخاب نشده" />
      </div>
    </Modal>
  )
}

export default InsuranceDataResults
