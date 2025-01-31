import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../header";

import styles from "./style.module.scss";

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