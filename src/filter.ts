import { event } from './events';
import { remote } from 'electron';
import { getConfig } from './utils';

function composeFilter() {
  const urls: string[] = [];
  const defaultTracking: DefaultTracking = getConfig('defaultTracking');

  if (defaultTracking.metrics) urls.push('*://central.github.com/api/usage/atom');
  if (defaultTracking.analytics) urls.push('*://*.google-analytics.com/*');
  if (defaultTracking.tagManager) urls.push('*://*.tagManager.com/*');

  if (defaultTracking.matomo) {
    urls.push('*://*/matomo-tracking.*');
    urls.push('*://*/matomo.js');
    urls.push('*://*/matomo.php');
  }

  return { urls };
}

function init(): void {
  const filter = composeFilter();

  remote.session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
    console.log('Connection blocked', details);

    event.emit('do-not-track:blocked-connection', details);

    callback({
      cancel: true
    });
  });
}

export default init;
