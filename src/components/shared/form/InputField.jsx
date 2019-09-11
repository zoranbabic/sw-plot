import React from 'react';
import PropTypes from 'prop-types';
import { Field as FormikField } from 'formik';
import InputBase from '@material-ui/core/InputBase';

import Field from './Field';

const Input = ({
  inputProps,
  ...fieldProps
}) => (
  <Field {...fieldProps}>
    <InputBase
      required={false}
      {...fieldProps.field}
      {...inputProps}
    />
  </Field>
);

Input.propTypes = {
  inputProps: PropTypes.object.isRequired,
};

const InputField = (props) => <FormikField component={Input} {...props} />;

export default InputField;
