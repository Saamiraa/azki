/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setError, setStatus, setFormData } from './slice';
import validateForm from './utils';
import { useNavigate } from 'react-router-dom';
import { STATUSES } from '../../constant';

export const useFormValidation = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.form.error);

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

    setFormIsValid(Object.keys(fieldErrors).length === 0)
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
    dispatch(setStatus(STATUSES.LOADING));
    setTimeout(() => {
      dispatch(setFormData(formInfo));
      dispatch(setStatus(STATUSES.SUCCESS));
      navigate('/insurance')
    }, 3000);
  };

  return {
    formInfo,
    setFormInfo,
    formIsValid,
    handleChangeInput,
    handleSubmit,
    error,
  };
};