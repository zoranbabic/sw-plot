import React from 'react';
// import PropTypes from 'prop-types';
import { Form } from 'formik';

import InputField from 'components/shared/form/InputField';
import Button from 'components/shared/Button';
import { validator, required } from 'utils/form/validator';

const FormPresenter = () => {
  return (
    <Form>
      <InputField
        name="title"
        label="common.title"
        validate={validator(required)}
      />
      <InputField
        name="description"
        label="common.description"
      />
      <Button type="submit" label="common.generate.plot" />
    </Form>
  );
};

/* FormPresenter.propTypes = {

}; */

export default FormPresenter;
