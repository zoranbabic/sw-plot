/* eslint consistent-return: 0 */
import _ from 'lodash';

export const required = (value) => {
  if (value === undefined || value === null || value === '') {
    return 'validators.required';
  }
};

export const validator = (...validators) => (value) => {
  let error;
  _.forEach(validators, (validatorFn) => {
    error = validatorFn(value);

    if (error !== undefined) {
      return false;
    }
  });

  return error;
};
