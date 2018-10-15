import first from 'lodash/first';
import * as rest from 'rest-facade';
import RestError from '../core/restError';

/**
 * Get country by unique name
 * @param {*} name 
 */
export const getByName = async (name) => {
  try {
    console.log(name);
    const client = new rest.default.Client(`${process.env.REST_COUNTRIES}/name/:name`);
    const countries = await client.getAll({ name });
    return first(countries);
  } catch (e) {
    throw new RestError(e);
  }
};