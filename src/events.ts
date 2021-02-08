import { EventEmitter } from 'events';
import store from './store';

const event = new EventEmitter();

event.on('do-not-track:blocked-connection', ({url}) => {
  store.update(writable => {
    writable.counter += 1;
    writable.buttonClass = 'error';

    switch(true) {
      case url.includes('://central.github.com/api/usage/atom'):
        writable.services.metrics.counter += 1;
        break;

      case url.includes('://google-analytics.com/'):
      case url.includes('://www.google-analytics.com/'):
        writable.services.analytics.counter += 1;
        break;

      case url.includes('://tagManager.com/'):
      case url.includes('://www.tagManager.com/'):
        writable.services.tagManager.counter += 1;
        break;

      case url.includes('matomo-tracking'):
      case url.includes('matomo.js'):
      case url.includes('matomo.php'):
        writable.services.matomo.counter += 1;
        break;

      default:
        writable.services.others.counter += 1;

    }

    return writable;
  })
});


export {
  event
};
