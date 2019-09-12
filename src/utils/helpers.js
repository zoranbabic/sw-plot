const transformFormValues = (values) => ({
  title: values.title,
  personName: values.person.value.name,
  planetName: values.planet.value.name,
  planetPopulation: values.planet.value.population,
  speciesName: values.species.value.name,
  vehicleName: values.vehicle.value.name,
  starshipName: values.starship.value.name,
  starshipModel: values.starship.value.model,
});

export default {
  transformFormValues,
};
