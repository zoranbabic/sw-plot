import React from 'react';
// import PropTypes from 'prop-types';
import { Form } from 'formik';

import InputField from 'components/shared/form/InputField';
import Button from 'components/shared/Button';

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
      <Button type="submit" label="common.generate.plot" />
    </Form>
  );
};

/* FormPresenter.propTypes = {

}; */

export default FormPresenter;
