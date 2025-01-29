import { useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { fetchInsuranceProviders } from './thunk'

const useFetchProvidersList = () => {

  const dispatch = useDispatch<AppDispatch>()

  const data = useSelector((state: RootState) => state.providers.insuranceProvider);
  const status = useSelector((state: RootState) => state.providers.status);

  const fetchProvidersList = useCallback(() => {
    dispatch(fetchInsuranceProviders())
  }, [dispatch])

  useEffect(() => {
    fetchProvidersList()
  }, [fetchProvidersList])

  return { data, status, fetchProvidersList };
}

export default useFetchProvidersList