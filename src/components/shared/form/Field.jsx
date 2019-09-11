
import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormHelperText,
  InputLabel,
} from '@material-ui/core';
import _ from 'lodash';

import Text from '../Text';

const Field = ({
  field,
  form: { touched, errors },
  children,
  formControlProps,
  label,
}) => {
  const error = _.get(errors, field.name);
  const isFieldTouched = _.get(touched, field.name);
  const shouldDisplayError = Boolean(isFieldTouched && error);

  const LabelComponent = label && (
    <InputLabel htmlFor={field.name}>
      <Text message={label} />
    </InputLabel>
  );

  const ErrorComponent = shouldDisplayError && (
    <FormHelperText>
      <Text message={String(error)} />
    </FormHelperText>
  );

  return (
    <FormControl margin="normal" required fullWidth error={shouldDisplayError} {...formControlProps}>
      {LabelComponent}
      {children}
      {ErrorComponent}
    </FormControl>
  );
};

Field.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  formControlProps: PropTypes.object,
  label: PropTypes.string.isRequired,
};

Field.defaultProps = {
  formControlProps: {},
};

export default Field;
