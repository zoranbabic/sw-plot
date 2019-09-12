import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Paper } from '@material-ui/core';

import styles from './Form.container.styles';
import FormPresenter from './Form.presenter';

const INITIAL_VALUES = {
  title: '',
  description: '',
};

const FormContainer = ({
  onSubmit,
}) => {
  const classes = styles();
  const renderForm = (props) => <FormPresenter {...props} />;

  return (
    <Paper className={classes.paper}>
      <Formik
        render={renderForm}
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmit}
      />
    </Paper>
  );
};

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormContainer;
