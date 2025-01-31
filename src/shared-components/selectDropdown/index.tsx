/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';
interface SelectDropdownProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  data: any[];
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ onChange, value, data }) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        onChange={onChange}
        value={value}
        className={styles.selectContainer}
      >
        <option value="">{value}</option>
        {data.map((item) => (
          <option key={item.id} value={item.title}>{item.title}</option>
        ))}
      </select>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={styles.selectIcon}
      />
    </div>
  );
}

export default SelectDropdown;