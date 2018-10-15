import head from 'lodash/head';
import filter from 'lodash/filter';
import * as JsSearch from 'js-search';
import * as rest from 'rest-facade';
import RestError from '../core/restError';

console.log(JsSearch);

/**
 * Get country by unique name
 * @param {*} name 
 */
export const findAllByName = async (q) => {
  try {
    const client = new rest.default.Client(`${process.env.REST_COUNTRIES}/all`);
    const countryNames = await client.getAll();
    var search = new JsSearch.default.Search('name');
    search.addIndex('name');
    search.addDocuments(countryNames);
    const results = search.search(q);
    return results;
  } catch (e) {
    console.log(e);
    throw new RestError(e);
  }
}

/**
 * Get country by unique name
 * @param {*} name 
 */
export const getByName = async (name) => {
  try {
    const client = new rest.default.Client(`${process.env.REST_COUNTRIES}/name/:name`);
    const countries = await client.getAll({ name });
    return head(countries);
  } catch (e) {
    throw new RestError(e);
  }
};

