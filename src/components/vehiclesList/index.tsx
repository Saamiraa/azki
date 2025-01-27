import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectVehicle, selectUsage } from "./slice";
import useFetchVehicleList from "./useFetchVehicleList";
import VehicleItem from "./components/vehicleItem";
import { Vehicle } from "./types";

const VehiclesPage: React.FC = () => {
  const { data: vehicles, status } = useFetchVehicleList();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedVehicle = useSelector((state: any) => state.vehicles.selectedVehicle);
  const selectedUsages = useSelector((state: any) => state.vehicles.selectedVehicleUsages);

  const handleVehicleSelection = (vehicle: Vehicle) => {
    const { id, title, usages=[] } = vehicle;
    dispatch(selectVehicle({ id, title, usages }));
    navigate({
      pathname: "/vehicles",
      search: `?type=${title}`,
    });
  };

  const handleUsageSelection = (usageTitle: string) => {
    dispatch(selectUsage(usageTitle));
  };

  return (
    <div>
      {status === "loading" && <p>Loading vehicles...</p>}
      {status === "error" && <p>Failed to load vehicles. Please try again.</p>}

      {selectedVehicle ? (
        <VehicleItem
          data={selectedUsages}
          onClick={(usage) => handleUsageSelection(usage.title)}
        />
      ) : (
        <VehicleItem
          data={vehicles}
          onClick={(vehicle) => handleVehicleSelection(vehicle)}
        />
      )}
    </div>
  );
};

export default VehiclesPage;
