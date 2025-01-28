import React from "react";
import styles from "./style.module.scss";

const LeftPanel: React.FC = () => {
  return (
    <div className={styles.leftPanel}>
      <div className={styles.leftContainer}>
        <h2>ثبت نام</h2>
      </div>
    </div>
  );
};

export default LeftPanel;
