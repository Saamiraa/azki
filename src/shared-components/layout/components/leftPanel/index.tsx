import React from "react";
import styles from "./style.module.scss";
import { useLocation } from "react-router-dom";
import UserInfo from "./components/userInfo";


const LeftPanel: React.FC = () => {
  const location = useLocation();


  return (
    <div className={styles.leftPanel}>
      <div className={styles.leftContainer}>
        {location.pathname === '/' ? <h2>ثبت نام</h2> : <UserInfo />}
      </div>
    </div>
  );
};

export default LeftPanel;
