/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import FormController from '../../components/formController'

import styles from './styles.module.scss'
import { useSelector } from 'react-redux';
import Loading from '../../shared-components/loading';
import { STATUSES } from '../../constant';

const Form: React.FC = () => {

  const status = useSelector((state: any) => state.form.status);

  const renderForm = () => {
    if (status === STATUSES.LOADING) return <Loading />
    return (
      <div className={styles.formContainer}>
        <h2 className={styles.title}>برای ثبت نام بیمه فرم زیر رو تکمیل کنید.</h2>
        <FormController />
      </div>
    )
  }
  return renderForm()
}

export default Form