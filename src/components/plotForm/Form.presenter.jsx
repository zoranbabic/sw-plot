import React from 'react';
// import PropTypes from 'prop-types';
import { Form } from 'formik';

import InputField from 'components/shared/form/InputField';
import Button from 'components/shared/Button';
import { validator, required } from 'utils/form/validator';
import { getPeople } from 'utils/swapi';
import AsyncSelectField from 'components/shared/form/AsyncSelectField';
/* 
const test = async () => {
  const data = await getPeople();

  console.log(data);
};

test(); */

const FormPresenter = () => {
  return (
    <Form>
      <InputField
        name="title"
        label="form.title"
        validate={validator(required)}
      />
      <InputField
        name="description"
        label="form.description"
      />
      <AsyncSelectField
        label="form.person"
        name="personName"
        loadOptions={getPeople}
      />
      <Button type="submit" label="common.generate.plot" />
    </Form>
  );
};

/* FormPresenter.propTypes = {

}; */

export default FormPresenter;
