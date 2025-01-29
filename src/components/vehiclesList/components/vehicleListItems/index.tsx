/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Vehicle, VehicleUsage } from "../../types";

import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import SelectDropdown from "../../../../shared-components/selectDropdown";
import NavigationButton from "../../../../shared-components/navigationButton";
import { useNavigate } from "react-router-dom";

interface VehicleListItemProps {
  vehicles: Vehicle[];
  usages: VehicleUsage[];
  onVehicleClick: (vehicleTitle: string, usages?: VehicleUsage[]) => void;
  onUsageClick: (usageTitle: string) => void
}
const VehicleListItems: React.FC<VehicleListItemProps> = ({ vehicles, usages, onVehicleClick, onUsageClick }) => {

  const selectedVehicle = useSelector((state: any) => state.vehicles.selectedVehicle);
  const selectedUsage = useSelector((state: any) => state.vehicles.selectedUsageTitle);

  const navigate = useNavigate()

  const handleNavigateToInsurance = () => {
    navigate('/insurance')
  }

  const handleProceedToNextStep = () => {
    navigate('/insurance-providers')
  }

  return (
    <div className={styles.vehicleListsContainer}>
      <h3 className={styles.title}>نوع و مدل خودروی خود را انتخاب کنید.</h3>
      <div className={styles.selectItems}>
        <SelectDropdown
          onChange={(e) => {
            const selectedVehicle = vehicles.find(v => v.title === e.target.value);
            if (selectedVehicle) {
              onVehicleClick(selectedVehicle.title, selectedVehicle.usages);
            }
          }}
          value={selectedVehicle || "نوع خودرو"}
          data={vehicles}
        />
        <SelectDropdown
          onChange={(e) => onUsageClick(e.target.value)}
          value={selectedUsage || "مدل خودرو"}
          data={usages}
        />
      </div>
      <div className={styles.buttons}>
        <NavigationButton text="بازگشت" onClick={handleNavigateToInsurance} />
        <NavigationButton
          text="مرحله بعد"
          disabled={!selectedVehicle || !selectedUsage}
          onClick={handleProceedToNextStep}
        />
      </div>
    </div>
  );
};

export default VehicleListItems;
