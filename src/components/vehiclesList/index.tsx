/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectVehicle, selectUsage } from "./slice";

import useFetchVehicleList from "./useFetchVehicleList";

import VehicleListItems from "./components/vehicleListItems";
import Loading from "../../shared-components/loading";
import ErrorMessage from "../../shared-components/errorMessage";

import { STATUSES } from "../../constant";

import styles from './style.module.scss'
import { VehicleUsage } from "./types";

const VehicleList: React.FC = () => {
  const { data: vehicles, status, fetchVehicleList } = useFetchVehicleList();
  const dispatch = useDispatch();

  const selectedVehicleUsages = useSelector((state: any) => state.vehicles.selectedVehicleUsages);

  const handleVehicleSelection = (title: string, usages?: VehicleUsage[]) => {
    dispatch(selectVehicle({ title, usages }));
  };
  const handleUsageSelection = (title: string) => {
    dispatch(selectUsage(title))
  }

  const renderContent = () => {
    if (status === STATUSES.LOADING) return <Loading />
    if (status === STATUSES.ERROR) return (
      <ErrorMessage
        message="مشکلی پیش آمده است. دوباره تلاش کنید."
        onRetry={fetchVehicleList}
      />
    )
    return (
      <div className={styles.vehicleListsContainer}>
        <VehicleListItems
          vehicles={vehicles}
          usages={selectedVehicleUsages || []}
          onVehicleClick={handleVehicleSelection}
          onUsageClick={handleUsageSelection}
        />
      </div>
    );
  }
  return renderContent()
}

export default VehicleList