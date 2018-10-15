import { getByName } from '../../services/countries';

async function getCountryByName(req, res) {
  try {
    const { params: { name } } = req;
    const country = await getByName(name);
    return res.status(200).json(country);
  } catch (err) {
    return res.status(err.statusCode).json(err);
  }
};

/**
 * Rota da API
 * @param {*} router 
 */
export default function(router) {
  router.get('/countries/:name', getCountryByName);
}