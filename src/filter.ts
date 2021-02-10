import updateCounter from './counter';
import { getConfig } from './utils';
import { trackingURLs } from './config';
import { remote } from 'electron';
import type { ConfigValues } from 'atom';

function composeFilter() {
  const urls: string[] = [];
  const defaultTracking: ConfigValues[string] = getConfig('defaultTracking');

  if (defaultTracking.metrics) urls.push(...trackingURLs.metrics);
  if (defaultTracking.analytics) urls.push(...trackingURLs.analytics);
  if (defaultTracking.tagManager) urls.push(...trackingURLs.tagManager);
  if (defaultTracking.matomo) urls.push(...trackingURLs.matomo);

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
