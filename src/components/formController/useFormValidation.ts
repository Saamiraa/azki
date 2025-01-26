/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setError, setStatus, setFormData } from './slice';
import { FORM_STATUSES } from './constants';
import validateForm from './utils';

export const useFormValidation = () => {

  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.form.error);
  const status = useSelector((state: any) => state.form.status);

  const [formInfo, setFormInfo] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    password: ''
  });

  const [formIsValid, setFormIsValid] = useState(true);

  const allErrors = Object.keys(formInfo).reduce<{ [key: string]: string }>((acc, field) => {
    const fieldErrors = validateForm(field as keyof typeof formInfo, formInfo[field as keyof typeof formInfo]);
    return { ...acc, ...fieldErrors };
  }, {});

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInfo((prevDataInfo) => ({
      ...prevDataInfo,
      [name]: value
    }));

    const fieldErrors = validateForm(name as keyof typeof formInfo, value);
    const updatedError = { ...error, [name]: fieldErrors[name] };
    dispatch(setError(updatedError));

    setFormIsValid(Object.keys(allErrors).length === 0)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.keys(allErrors).length > 0) {
      const formattedError = {
        name: allErrors.name || '',
        lastName: allErrors.lastName || '',
        phoneNumber: allErrors.phoneNumber || '',
        password: allErrors.password || ''
      };
      dispatch(setError(formattedError));
      setFormIsValid(false);
      return;
    }

    setFormIsValid(true);
    dispatch(setStatus(FORM_STATUSES.LOADING));
    setTimeout(() => {
      dispatch(setFormData(formInfo));
      dispatch(setStatus(FORM_STATUSES.SUCCESS));
    }, 3000);
  };

  return {
    formInfo,
    setFormInfo,
    formIsValid,
    handleChangeInput,
    handleSubmit,
    error,
    status
  };
};