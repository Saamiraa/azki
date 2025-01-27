/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Vehicle } from "../../types";

import styles from "./style.module.scss";

interface VehicleListItemProps {
  vehicles: Vehicle[];
  onVehicleClick: (vehicleTitle: string, usages: any) => void;
}

const VehicleListItem: React.FC<VehicleListItemProps> = ({ vehicles, onVehicleClick }) => {
  return (
    <>
      <h2 className={styles.title}>دسته بندی بیمه خود را انتخاب کنید.</h2>
      <ul className={styles.vehicleList}>
        {vehicles?.map((vehicle) => (
          <li
            onClick={() => onVehicleClick(vehicle.title, vehicle.usages)}
            key={vehicle.id}
            className={styles.vehicleListItem}
          >
            {vehicle.title}
            <FontAwesomeIcon icon={faArrowLeft} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default VehicleListItem
