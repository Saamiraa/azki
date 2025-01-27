import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicle, selectUsage } from "./slice";
import useFetchVehicleList from "./useFetchVehicleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss";

const VehicleList: React.FC = () => {
  const { data: vehicles, status, fetchVehicleList } = useFetchVehicleList();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedVehicleTitle = useSelector((state: any) => state.vehicles.selectedVehicle);
  const selectedVehicleUsages = useSelector((state: any) => state.vehicles.selectedVehicleUsages);

  // Update the URL and select the vehicle
  const handleVehicleSelection = (vehicleTitle: string, usages: any) => {
    dispatch(selectVehicle({ title: vehicleTitle, usages }));
    navigate({
      pathname: "/vehicles",
      search: `?type=${vehicleTitle}`,
    });
  };

  // Update the selected usage
  const handleUsageSelection = (usageTitle: string) => {
    dispatch(selectUsage(usageTitle));
  };

  // Render the list of vehicles
  const renderVehicleList = () => (
    <ul className={styles.vehicleList}>
      {vehicles?.map((vehicle) => (
        <li
          onClick={() => handleVehicleSelection(vehicle.title, vehicle.usages)}
          key={vehicle.id}
          className={styles.vehicleListItem}
        >
          {vehicle.title}
          <FontAwesomeIcon icon={faArrowLeft} />
        </li>
      ))}
    </ul>
  );

  // Render the list of usages for the selected vehicle
  const renderUsageList = () => (
    <ul className={styles.usageList}>
      {selectedVehicleUsages?.map((usage: any) => (
        <li
          onClick={() => handleUsageSelection(usage.title)}
          key={usage.id}
          className={styles.usageListItem}
        >
          {usage.title}
          <FontAwesomeIcon icon={faArrowLeft} />
        </li>
      ))}
    </ul>
  );

  // Handle the "Go Back" button
  const handleGoBack = () => {
    dispatch(selectVehicle(null));
    navigate({
      pathname: "/vehicles",
    });
  };

  // Use effect to update state based on query params
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const vehicleTitleFromQuery = queryParams.get("type");

    if (vehicleTitleFromQuery) {
      const selectedVehicle = vehicles.find(
        (vehicle) => vehicle.title === vehicleTitleFromQuery
      );
      if (selectedVehicle) {
        dispatch(selectVehicle({ title: selectedVehicle.title, usages: selectedVehicle.usages }));
      }
    } else {
      dispatch(selectVehicle(null)); // Clear selection if no vehicle in URL
    }
  }, [location, vehicles, dispatch]);

  return (
    <div>
      {!selectedVehicleTitle ? (
        <div>{renderVehicleList()}</div>
      ) : (
        <div>
          <button onClick={handleGoBack} className={styles.goBackButton}>
            Go Back
          </button>
          {renderUsageList()}
        </div>
      )}
    </div>
  );
};

export default VehicleList;
