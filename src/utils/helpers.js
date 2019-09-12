const transformFormValues = (values) => ({
  personName: values.person.name,
  planetName: values.planet.name,
  planetPopulation: values.planet.population,
  speciesName: values.species.name,
  vehicleName: values.vehicle.name,
  starshipName: values.starship.name,
  starshipModel: values.starship.model,
});

export default transformFormValues;
