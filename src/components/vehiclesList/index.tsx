/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectVehicle, selectUsage } from "./slice";

import useFetchVehicleList from "./useFetchVehicleList";

import VehicleListItem from "./components/vehicleListItem";
import UsageListItem from "./components/usageListItem";

const VehicleList: React.FC = () => {
  const { data: vehicles, status, fetchVehicleList } = useFetchVehicleList();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedVehicleTitle = useSelector((state: any) => state.vehicles.selectedVehicle);
  const selectedVehicleUsages = useSelector((state: any) => state.vehicles.selectedVehicleUsages);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const vehicleTitleFromQuery = queryParams.get("type");

    if (vehicleTitleFromQuery) {
      const selectedVehicle = vehicles.find((vehicle) => (
        vehicle.title === vehicleTitleFromQuery
      ))
      if (selectedVehicle) {
        dispatch(selectVehicle({ title: selectedVehicle.title, usages: selectedVehicle.usages }));
      }
    } else {
      dispatch(selectVehicle(null));
    }
  }, [location, vehicles, dispatch])

  const handleGoBack = () => {
    dispatch(selectVehicle(null))
    navigate({
      pathname: "/vehicles"
    })
  }

  const handleVehicleSelection = (title: string, usages: []) => {
    dispatch(selectVehicle({ title, usages }));
    navigate({ pathname: "/vehicles", search: `?type=${title}` });
  }

  const handleUsageSelection = (title: string) => {
    dispatch(selectUsage(title))
  }

  return (
    <div>
      {!selectedVehicleTitle && (
        <VehicleListItem
          vehicles={vehicles}
          onVehicleClick={handleVehicleSelection}
        />
      )}
      {selectedVehicleTitle && (
        <UsageListItem
          usages={selectedVehicleUsages}
          onUsageClick={handleUsageSelection}
          onBackButton={handleGoBack}
          title={selectedVehicleTitle}
        />
      )}
    </div>
  );
}

export default VehicleList