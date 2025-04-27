import store from './store';
import { trackingURLs } from './config';

export async function updateCount(details: Electron.OnBeforeSendHeadersListenerDetails): Promise<void> {
  const multimatch = (await import('multimatch')).default;

  store.update(state => {
    state.counter++;
    state.buttonClass = 'error';

    switch(true) {
      case multimatch(details.url, trackingURLs.adobe).length > 0:
        state.services.adobe.counter++;
        break;

      case multimatch(details.url, trackingURLs.bugsnag).length > 0:
        state.services.bugsnag.counter++;
        break;

      case multimatch(details.url, trackingURLs.metrics).length > 0:
        state.services.metrics.counter++;
        break;

      case multimatch(details.url, trackingURLs.analytics).length > 0:
        state.services.analytics.counter++;
        break;

      case multimatch(details.url, trackingURLs.tagManager).length > 0:
        state.services.tagManager.counter++;
        break;

      case multimatch(details.url, trackingURLs.matomo).length > 0:
      case details.url.includes('matomo.js'):
      case details.url.includes('matomo.php'):
      case details.url.includes('piwik.js'):
      case details.url.includes('piwik.php'):
        state.services.matomo.counter++;
        break;

      case multimatch(details.url, trackingURLs.microsoft).length > 0:
        state.services.microsoft.counter++;
        break;

      case multimatch(details.url, trackingURLs.posthog).length > 0:
        state.services.posthog.counter++;
        break;

      case multimatch(details.url, trackingURLs.sentry).length > 0:
        state.services.sentry.counter++;
        break;

      case multimatch(details.url, trackingURLs.yandex).length > 0:
        state.services.yandex.counter++;
        break;

      default:
        state.services.others.counter++;
    }

    return state;
  });
}
