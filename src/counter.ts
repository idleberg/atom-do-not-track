import store from './store';
import { trackingURLs } from './config';
import multimatch from 'multimatch';

function updateCount(details: Electron.OnBeforeSendHeadersListenerDetails): void {
  store.update(writable => {
    writable.counter += 1;
    writable.buttonClass = 'error';

    switch(true) {
      case multimatch(details.url, trackingURLs.metrics).length > 0:
        writable.services.metrics.counter += 1;
        break;

      case multimatch(details.url, trackingURLs.analytics).length > 0:
        writable.services.analytics.counter += 1;
        break;

      case multimatch(details.url, trackingURLs.tagManager).length > 0:
        writable.services.tagManager.counter += 1;
        break;

      case multimatch(details.url, trackingURLs.matomo).length > 0:
      case details.url.includes('matomo.js'):
      case details.url.includes('matomo.php'):
      case details.url.includes('piwik.js'):
      case details.url.includes('piwik.php'):
        writable.services.matomo.counter += 1;
        break;

      default:
        writable.services.others.counter += 1;
    }

    return writable;
  });
}

export default updateCount;
