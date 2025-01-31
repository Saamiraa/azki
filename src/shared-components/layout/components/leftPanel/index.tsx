import React from "react";

import { useLocation } from "react-router-dom";

import UserInfo from "../userInfo";

import styles from "./style.module.scss";

const LeftPanel: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.leftPanel}>
      <div className={styles.userInfoContainer}>
        {location.pathname === '/' ? <h2 className={styles.title}>ثبت نام</h2> : <UserInfo />}
      </div>
    </div>
  );
};

export default LeftPanel;