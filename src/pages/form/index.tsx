/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import FormController from '../../components/formController'

import styles from './styles.module.scss'
import { useSelector } from 'react-redux';
import { FORM_STATUSES } from '../../components/formController/constants';
import Loading from '../../shared-components/loading';

const Form: React.FC = () => {

  const status = useSelector((state: any) => state.form.status);

  const renderForm = () => {
    if (status === FORM_STATUSES.LOADING) return <Loading />
    return (
      <div className={styles.formContainer}>
        <h1 className={styles.title}>برای ثبت نام بیمه فرم زیر رو تکمیل کنید.</h1>
        <FormController />
      </div>
    )
  }
  return renderForm()
}

export default Form