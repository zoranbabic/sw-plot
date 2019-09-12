import React from 'react';
import PropTypes from 'prop-types';
import { Field as FormikField } from 'formik';
import MuiInput from '@material-ui/core/Input';

import Field from './Field';

const Input = ({
  inputProps,
  ...fieldProps
}) => (
  <Field {...fieldProps}>
    <MuiInput
      required={false}
      {...fieldProps.field}
      autoComplete="off"
      {...inputProps}
    />
  </Field>
);

Input.propTypes = {
  inputProps: PropTypes.object,
};

Input.defaultProps = {
  inputProps: {},
};

const InputField = (props) => <FormikField component={Input} {...props} />;

export default InputField;
