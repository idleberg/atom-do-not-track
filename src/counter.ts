import store from './store';

function updateCount(details: Electron.OnBeforeSendHeadersListenerDetails): void {
  store.update(writable => {
    writable.counter += 1;
    writable.buttonClass = 'error';

    switch(true) {
      case details.url.includes('://central.github.com/api/usage/atom'):
        writable.services.metrics.counter += 1;
        break;

      case details.url.includes('://google-analytics.com/'):
      case details.url.includes('://www.google-analytics.com/'):
        writable.services.analytics.counter += 1;
        break;

      case details.url.includes('://googletagmanager.com/'):
      case details.url.includes('://www.googletagmanager.com/'):
        writable.services.tagManager.counter += 1;
        break;

      case details.url.includes('matomo-tracking'):
      case details.url.includes('matomo.js'):
      case details.url.includes('matomo.php'):
        writable.services.matomo.counter += 1;
        break;

      default:
        writable.services.others.counter += 1;
    }

    return writable;
  });
}

export default updateCount;
