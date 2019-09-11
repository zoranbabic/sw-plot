import * as React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Text = ({
  message,
  ...props
}) => <FormattedMessage id={message} {...props} />;

Text.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Text;
