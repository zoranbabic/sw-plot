import React from 'react';
import PropTypes from 'prop-types';
import { Field as FormikField } from 'formik';
import AsyncPaginate from 'react-select-async-paginate';

import Field from './Field';

const AsyncSelect = ({
  loadOptions,
  ...fieldProps
}) => {
  const onChange = (value) => {
    const {
      form: { setFieldValue },
      field: { name },
    } = fieldProps;

    setFieldValue(name, value);
  };
  return (
    <Field {...fieldProps}>
      <AsyncPaginate
        {...fieldProps.field}
        onChange={onChange}
        loadOptions={loadOptions}
      />
    </Field>
  );
};

AsyncSelect.propTypes = {
  loadOptions: PropTypes.func.isRequired,
};

const AsyncSelectField = (props) => <FormikField component={AsyncSelect} {...props} />;

export default AsyncSelectField;
