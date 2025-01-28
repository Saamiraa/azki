/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSelector } from "react-redux";
import { STATUSES } from "../../constant";
import Loading from "../../shared-components/loading";
import ContentWrapper from "../../shared-components/contentWrapper";
import FormController from "../../components/formController";

const Form: React.FC = () => {
  const status = useSelector((state: any) => state.form.status);

  if (status === STATUSES.LOADING) {
    return <Loading />;
  }

  return (
    <ContentWrapper title="ثبت نام">
      <FormController />
    </ContentWrapper>
  );
};

export default Form;

