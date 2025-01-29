/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import SelectDropdown from '../../../../shared-components/selectDropdown'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'
import { Discounts } from '../../types'
import ActionButton from '../../../../shared-components/actionButton'
import InsuranceDataResults from '../../../InsuranceDataResults'

interface InsuranceDiscountItemProps {
  discounts: Discounts[];
  onDiscountClick: (discountTitle: string) => void;
  onDriverDiscountClick: (discountTitle: string) => void;
}

const InsuranceDiscountItem: React.FC<InsuranceDiscountItemProps> = ({ discounts, onDiscountClick, onDriverDiscountClick }) => {

  const selectedDiscount = useSelector((state: any) => state.discount.selectedInsuranceDiscount)
  const selectedDiscountDriver = useSelector((state: any) => state.discount.selectedInsuranceDriverDiscount)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={styles.insuranceDiscountContainer}>
      <h3 className={styles.title}>شرکت بیمه‌گر قبلی خود را در این بخش وارد کنید.</h3>
      <div className={styles.selectItems}>
        <SelectDropdown
          value={selectedDiscount || 'درصد تخفیف ثالث'}
          data={discounts}
          onChange={(e) => onDiscountClick(e.target.value)}
        />
        <SelectDropdown
          value={selectedDiscountDriver || 'درصد تخفیف حوادث راننده'}
          data={discounts}
          onChange={(e) => onDriverDiscountClick(e.target.value)}
        />
      </div>
      <div className={styles.button}>
        <ActionButton
          type="button"
          text="استعلام قیمت"
          onClick={openModal}
          disabled={!selectedDiscount || !selectedDiscountDriver}
        />
      </div>
      {isModalOpen && <InsuranceDataResults onClose={closeModal} />}
    </div>
  )
}

export default InsuranceDiscountItem