import React from 'react'

import { useDispatch } from 'react-redux'

import useFetchDiscountList from './useFetchDiscountList'

import { selectedInsuranceDriverDiscount, selectInsuranceDiscount } from './slice'

import InsuranceDiscountItem from './components/InsuranceProvidersItem'

import Loading from '../../shared-components/loading'
import ErrorMessage from '../../shared-components/errorMessage'

import { STATUSES } from '../../constant'

import styles from './style.module.scss'

const InsuranceDiscountList: React.FC = () => {
  const { data, status, fetchDiscountList } = useFetchDiscountList()

  const dispatch = useDispatch()

  const handleDiscountSelection = (title: string) => {
    dispatch(selectInsuranceDiscount(title))
  }

  const handleDriverDiscountSelection = (title: string) => {
    dispatch(selectedInsuranceDriverDiscount(title))
  }

  const renderContent = () => {
    if (status === STATUSES.LOADING) return <Loading />
    if (status === STATUSES.ERROR) return (
      <ErrorMessage
        message="مشکلی پیش آمده است. دوباره تلاش کنید."
        onRetry={fetchDiscountList}
      />
    )
    return (
      <div className={styles.discountListsContainer}>
        <InsuranceDiscountItem
          discounts={data}
          onDiscountClick={handleDiscountSelection}
          onDriverDiscountClick={handleDriverDiscountSelection}
        />
      </div>
    );
  }
  return renderContent()
}

export default InsuranceDiscountList