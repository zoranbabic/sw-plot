import React from 'react';
// import PropTypes from 'prop-types';
import { Form } from 'formik';

import InputField from 'components/shared/form/InputField';

const FormPresenter = () => {
  return (
    <Form>
      <InputField
        name="title"
        label="common.title"
      />
      <InputField
        name="description"
        label="common.description"
      />
    </Form>
  );
};

/* FormPresenter.propTypes = {

}; */

export default FormPresenter;
