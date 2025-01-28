import React from 'react';

import FormInput from './components/formInput';
import { useFormValidation } from './useFormValidation';

import styles from './style.module.scss'
import Button from '../../shared-components/button';

const FormController: React.FC = () => {
  const {
    formInfo,
    handleChangeInput,
    formIsValid,
    handleSubmit,
    error,
  } = useFormValidation();

  const renderFormData = () => {

    return (
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.forms}>
          <div className={styles.namesInfo}>
            <FormInput
              type="text"
              name="name"
              id="name"
              value={formInfo.name}
              onChange={handleChangeInput}
              placeholder="نام خود را وارد کنید."
              error={error}
            />
            <FormInput
              type="text"
              name="lastName"
              id="lastName"
              value={formInfo.lastName}
              onChange={handleChangeInput}
              placeholder="نام خانوادگی خود را وارد کنید."
              error={error}
            />
          </div>
          <FormInput
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formInfo.phoneNumber}
            onChange={handleChangeInput}
            placeholder="شماره تلفن خود را وارد کنید."
            error={error}
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            value={formInfo.password}
            onChange={handleChangeInput}
            placeholder="رمز عبور بسازید."
            error={error}
          />
        </div>
        <div className={styles.button}>
          <Button text='ثبت فرم' type='submit' />
          {!formIsValid && <p className={styles.formValidationText}>مشکلات فرم را تکمیل کنید.</p>}
        </div>
      </form>
    );
  };

  return renderFormData();
};

export default FormController;
