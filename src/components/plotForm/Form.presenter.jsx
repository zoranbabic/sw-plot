import React from 'react';
// import PropTypes from 'prop-types';
import { Form } from 'formik';

import InputField from 'components/shared/form/InputField';
import Button from 'components/shared/Button';
import { validator, required } from 'utils/form/validator';
import { getPlanets } from 'utils/swapi';
import AsyncSelectField from 'components/shared/form/AsyncSelectField';
import Text from 'components/shared/Text';

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
        name="person"
        loadOptions={getPlanets}
        selectOptions={{ placeholder: <Text message="form.person" /> }}
        validate={validator(required)}
      />
      <AsyncSelectField
        label="form.planet"
        name="planet"
        loadOptions={getPlanets}
        selectOptions={{ placeholder: <Text message="form.planet" /> }}
        validate={validator(required)}
      />
      <AsyncSelectField
        label="form.species"
        name="species"
        loadOptions={getPlanets}
        selectOptions={{ placeholder: <Text message="form.species" /> }}
        validate={validator(required)}
      />
      <AsyncSelectField
        label="form.vehicle"
        name="vehicle"
        loadOptions={getPlanets}
        selectOptions={{ placeholder: <Text message="form.vehicle" /> }}
        validate={validator(required)}
      />
      <AsyncSelectField
        label="form.starship"
        name="starship"
        loadOptions={getPlanets}
        selectOptions={{ placeholder: <Text message="form.starship" /> }}
        validate={validator(required)}
      />
      <Button type="submit" label="common.generate.plot" />
    </Form>
  );
};

/* FormPresenter.propTypes = {

}; */

export default FormPresenter;
