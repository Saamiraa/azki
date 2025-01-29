import React from "react";

import VehiclesList from "../../components/vehiclesList";

import ContentWrapper from "../../shared-components/contentWrapper";

const Vehicles: React.FC = () => {
  return (
    <ContentWrapper title="بیمه شخص ثالث">
      <VehiclesList />
    </ContentWrapper>
  )
}

export default Vehicles