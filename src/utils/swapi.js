import axios from 'axios';

const BASE_URL = 'https://swapi.co/api';
const PEOPLE_URL = `${BASE_URL}/people`;
const PLANETS_URL = `${BASE_URL}/planets`;

const getResources = async (search, loadedOptions, { page = 1 }, url) => {
  const searchParam = search ? `&search=${search}` : '';
  try {
    const response = await axios.get(`${url}?page=${page}${searchParam}`);

    return {
      options: response.data.results.map((resource) => (
        {
          value: resource.name,
          label: resource.name,
        }
      )),
      hasMore: !!response.data.next,
      additional: {
        page: page + 1,
      },
    };
  } catch (error) {
    return {};
  }
};

export const getPeople = (search, loadedOptions, additional) => (
  getResources(search, loadedOptions, additional, PEOPLE_URL)
);

export const getPlanets = (search, loadedOptions, additional) => (
  getResources(search, loadedOptions, additional, PLANETS_URL)
);
