import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from './style.module.scss'
import { VehicleListProps } from '../../types';

const VehicleItem: React.FC<VehicleListProps> = ({ data, onClick }) => {
  return (
    <div>
      <ul className={styles.vehicleList}>
        {data?.map((item) => (
          <div key={item.id}
            className={styles.vehicleItem}>
            <li
              onClick={() => onClick(item)}
              className={styles.vehicleListItem}
            >
              {item.title}
            </li>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default VehicleItem