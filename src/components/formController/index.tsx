import React from 'react';

import FormInput from './components/formInput';
import { useFormValidation } from './useFormValidation';
import { FORM_STATUSES } from './constants';
import FormButton from './components/formButton';

const FormController: React.FC = () => {
  const {
    formInfo,
    handleChangeInput,
    formIsValid,
    handleSubmit,
    error,
    status
  } = useFormValidation();

  const renderFormData = () => {
    if (status === FORM_STATUSES.LOADING) return <p>loading</p>;

    return (
      <form onSubmit={handleSubmit}>
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
        <FormButton text='ثبت فرم' />
        {!formIsValid && <p>مشکلات فرم را تکمیل کنید.</p>}
      </form>
    );
  };

  return renderFormData();
};

export default FormController;
