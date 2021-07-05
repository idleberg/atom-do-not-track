import store from './store';
import { trackingURLs } from './config';
import multimatch from 'multimatch';

function updateCount(details: Electron.OnBeforeSendHeadersListenerDetails): void {
  store.update(state => {
    state.counter += 1;
    state.buttonClass = 'error';

    switch(true) {
      case multimatch(details.url, trackingURLs.adobe).length > 0:
        state.services.adobe.counter += 1;
        break;

      case multimatch(details.url, trackingURLs.metrics).length > 0:
        state.services.metrics.counter += 1;
        break;

      case multimatch(details.url, trackingURLs.analytics).length > 0:
        state.services.analytics.counter += 1;
        break;

      case multimatch(details.url, trackingURLs.tagManager).length > 0:
        state.services.tagManager.counter += 1;
        break;

      case multimatch(details.url, trackingURLs.matomo).length > 0:
      case details.url.includes('matomo.js'):
      case details.url.includes('matomo.php'):
      case details.url.includes('piwik.js'):
      case details.url.includes('piwik.php'):
        state.services.matomo.counter += 1;
        break;

      case multimatch(details.url, trackingURLs.microsoft).length > 0:
        state.services.microsoft.counter += 1;
        break;

      case multimatch(details.url, trackingURLs.yandex).length > 0:
        state.services.yandex.counter += 1;
        break;

      default:
        state.services.others.counter += 1;
    }

    return state;
  });
}

export default updateCount;
