import EventEmitter from 'events';
import series from 'async/series';
import dotenv from 'dotenv';

export default function (app, router, apis, commands, events) {
  //  events
  global.emitter = new EventEmitter();
  series([
    // env variables
    (next) => {
      if (process.env.NODE_ENV !== 'production') {
        dotenv.config();      
      }
      next(null);
    },
    // register rest api routes
    (next) => {
      apis.forEach((api) => {
        api(router);
      });
      next(null);
    }
  ], (err, results) => {

  });
};