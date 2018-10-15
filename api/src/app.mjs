import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import promiseRouter from 'express-promise-router';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import cors from 'cors';
import bootstrap from './bootstrap';
import getCountryByName from './apis/query/getCountryByName';
import search from './apis/query/search'

const router = promiseRouter();
const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use('/api', router)
  .set('json spaces', 2);

//  bootstrap app
bootstrap(app, router, [
  // apis
  getCountryByName,
  search,
],
  [
    // commands
  ],
  [
    // events
  ]
);

// Error handling. The `ValidationError` instances thrown by objection.js have a `statusCode`
// property that is sent as the status code of the response.
app.use((err, req, res, next) => {
  if (err) {
    res
      .status(err.statusCode || err.status || 500)
      .send(err.data || err.message || {});
  } else {
    next();
  }
});

const swaggerSpec = yaml.load('./docs.yaml');

app.get('/swagger.json', function (req, res) {
  // initialize swaggerspec
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

const server = app.listen(process.env.PORT || 3003, () => {
  console.log('Example app listening at port %s', server.address().port);
});

export default app;
