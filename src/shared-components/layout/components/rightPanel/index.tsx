import React from "react";
import Header from "../header";
import styles from "./style.module.scss";

import { Outlet } from "react-router-dom";

const RightPanel: React.FC = () => {
  return (
    <div className={styles.rightPanel}>
      <main className={styles.mainContent}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default RightPanel;
