/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { useSelector } from "react-redux";

import user from '../../../../assets/icons/user.svg'

import styles from './style.module.scss'

const UserInfo: React.FC = () => {
  const firstName = useSelector((state: any) => state.form.formData.name)

  return (
    <div className={styles.userInfoContainer}>
      <img src={user} alt='user logo' className={styles.image} />
      <span className={styles.userName}>{firstName}</span>
    </div>
  )
}

export default UserInfo