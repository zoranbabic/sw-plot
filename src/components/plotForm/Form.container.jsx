import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import FormPresenter from './Form.presenter';

const INITIAL_VALUES = {
  title: '',
  description: '',
};

const FormContainer = ({
  onSubmit,
}) => {
  const renderForm = (props) => <FormPresenter {...props} />;

  return (
    <Formik
      render={renderForm}
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
    />
  );
};

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormContainer;
