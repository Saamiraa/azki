
import React from "react";

import RightPanel from "./components/rightPanel";
import LeftPanel from "./components/leftPanel";

import carImage from '../../assets/icons/car-green.svg'

import styles from "./style.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={styles.layoutContainer}>
      <RightPanel />
      <LeftPanel />
      <img
        src={carImage}
        alt="car logo"
        className={styles.image}
      />
    </div>
  );
}
export default Layout;