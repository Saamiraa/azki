/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./style.module.scss";
import Button from "../../../../shared-components/button";

interface UsageListItemProps {
  usages: any[];
  onUsageClick: (usageTitle: string) => void;
  onBackButton: () => void;
  title: string
}

const UsageListItem: React.FC<UsageListItemProps> = ({ usages, onUsageClick, onBackButton, title }) => {
  return (
    <div className={styles.usageListContainer}>
      <h2 className={styles.title}>دسته : {title}</h2>
      <ul className={styles.usageList}>
        {usages?.map((usage) => (
          <li
            onClick={() => onUsageClick(usage.title)}
            key={usage.id}
            className={styles.usageListItem}
          >
            {usage.title}
            <FontAwesomeIcon icon={faArrowLeft} />
          </li>
        ))}
      </ul>
      <Button type="button" text="بازگشت به صفحه قبل" onClick={onBackButton} />
    </div>
  );
};

export default UsageListItem
