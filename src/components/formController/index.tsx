import React from 'react';

import FormInput from './components/formInput';
import { useFormValidation } from './useFormValidation';
import FormButton from './components/formButton';

import styles from './style.module.scss'

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
          <FormButton text='ثبت فرم' />
        </div>
        {!formIsValid && <p className={styles.formValidationText}>مشکلات فرم را تکمیل کنید.</p>}
      </form>
    );
  };

  return renderFormData();
};

export default FormController;
