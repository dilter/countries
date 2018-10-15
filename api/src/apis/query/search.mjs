import { findAllByName } from '../../services/countries';

async function search(req, res) {
  try {
    const { query: { q } } = req;
    const results = await findAllByName(q);
    return res
      .status(200)
      .json(results);
  } catch (err) {
      return res
        .status(500)
        .json(err);
  }
};

/**
 * Rota da API
 * @param {*} router 
 */
export default function(router) {
  router.get('/search', search);
}