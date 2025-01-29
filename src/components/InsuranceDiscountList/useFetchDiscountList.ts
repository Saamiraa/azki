import { useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { fetchInsuranceDiscount } from './thunk'

const useFetchDiscountList = () => {

  const dispatch = useDispatch<AppDispatch>()

  const data = useSelector((state: RootState) => state.discount.insuranceDiscount);
  const status = useSelector((state: RootState) => state.discount.status);

  const fetchDiscountList = useCallback(() => {
    dispatch(fetchInsuranceDiscount())
  }, [dispatch])

  useEffect(() => {
    fetchDiscountList()
  }, [fetchDiscountList])

  return { data, status, fetchDiscountList };
}

export default useFetchDiscountList