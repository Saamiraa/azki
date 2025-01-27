import React from "react";

import VehiclesList from "../../components/vehiclesList";

import styles from './style.module.scss'

const Vehicles: React.FC = () => {
  return (
    <div className={styles.vehiclesContainer}>
      <VehiclesList />
    </div>
  )
}

export default Vehicles