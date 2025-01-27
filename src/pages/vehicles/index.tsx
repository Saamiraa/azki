import React from "react";

import VehiclesList from "../../components/vehiclesList";

import styles from './style.module.scss'

const Vehicles: React.FC = () => {
  return (
    <div className={styles.vehiclesContainer}>
      <h2 className={styles.title}>دسته بندی بیمه خود را انتخاب کنید.</h2>
      <VehiclesList />
    </div>
  )
}

export default Vehicles