import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';

import Text from './Text';

const Button = ({
  label,
  ...props
}) => (
  <MuiButton variant="contained" color="primary" {...props}>
    <Text message={label} />
  </MuiButton>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
