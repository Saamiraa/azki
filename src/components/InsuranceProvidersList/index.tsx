import React from 'react'

import { useDispatch } from 'react-redux'

import { selectInsuranceProvider } from './slice'

import useFetchProvidersList from './useFetchProvidersList'

import InsuranceProvidersItem from './components/InsuranceProvidersItem'

import { STATUSES } from '../../constant'

import Loading from '../../shared-components/loading'
import ErrorMessage from '../../shared-components/errorMessage'

import styles from './style.module.scss'

const InsuranceProvidersList: React.FC = () => {
  const { data, status, fetchProvidersList } = useFetchProvidersList()

  const dispatch = useDispatch()

  const handleProviderSelection = (title: string) => {
    dispatch(selectInsuranceProvider(title))
  }

  const renderContent = () => {
    if (status === STATUSES.LOADING) return <Loading />
    if (status === STATUSES.ERROR) return (
      <ErrorMessage
        message="مشکلی پیش آمده است. دوباره تلاش کنید."
        onRetry={fetchProvidersList}
      />
    )
    return (
      <div className={styles.providerListsContainer}>
        <InsuranceProvidersItem
          providers={data}
          onProvidersClick={handleProviderSelection}
        />
      </div>
    );
  }
  return renderContent()
}

export default InsuranceProvidersList