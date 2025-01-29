import React from 'react'
import useFetchProvidersList from './useFetchProvidersList'
import { STATUSES } from '../../constant'
import Loading from '../../shared-components/loading'
import ErrorMessage from '../../shared-components/errorMessage'

import styles from './style.module.scss'
import InsuranceProvidersItem from './components/InsuranceProvidersItem'
import { useDispatch } from 'react-redux'
import { selectInsuranceProvider } from './slice'

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
        message="مشکلی پیش آمده است"
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