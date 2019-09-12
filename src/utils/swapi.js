import axios from 'axios';

const BASE_URL = 'https://swapi.co/api';
const PEOPLE_URL = `${BASE_URL}/people`;
const PLANETS_URL = `${BASE_URL}/planets`;

const getResources = async ({ page = 1, searchTerm } = {}, url) => {
  console.log(searchTerm);
  const searchParam = searchTerm ? `&search=${searchTerm}` : '';
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

const getRescourceById = async (id, url) => {
  try {
    const response = await axios.get(`${url}/${id}`);

    return response.data;
  } catch (error) {
    return {};
  }
};

export const getPerson = (id) => (
  getRescourceById(id, PEOPLE_URL)
);

export const getPeople = (queryParams) => (
  getResources(queryParams, PEOPLE_URL)
);

export const getPlanet = (id) => (
  getRescourceById(id, PLANETS_URL)
);

export const getPlanets = (queryParams) => (
  getResources(queryParams, PLANETS_URL)
);
