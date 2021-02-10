import updateCounter from './counter';
import { getConfig } from './utils';
import { remote } from 'electron';
import type { ConfigValues } from 'atom';

function composeFilter() {
  const urls: string[] = [];
  const defaultTracking: ConfigValues[string] = getConfig('defaultTracking');

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

    updateCounter(details);

    callback({
      cancel: true
    });
  });
}

export default init;
