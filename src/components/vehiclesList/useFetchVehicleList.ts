import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store/store';
import { fetchVehiclesData } from './thunk';

const useFetchVehicleList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector((state: RootState) => state.vehicles.vehicles);
  const status = useSelector((state: RootState) => state.vehicles.status);

  const fetchVehicleList = useCallback(() => {
    dispatch(fetchVehiclesData());
  }, [dispatch])

  useEffect(() => {
    fetchVehicleList()
  }, [fetchVehicleList]);

  return { data, status, fetchVehicleList };
};

export default useFetchVehicleList;
