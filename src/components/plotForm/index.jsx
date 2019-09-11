import React from 'react';
// import PropTypes from 'prop-types';
import { Formik } from 'formik';

import FormPresenter from './Form.presenter';

const Form = () => {
  const onSubmit = () => {};
  const renderForm = (props) => <FormPresenter {...props} />;

  return (
    <Formik
      render={renderForm}
      initialValues={{}}
      onSubmit={onSubmit}
    />
  );
};

/* Form.propTypes = {

}; */

export default Form;
