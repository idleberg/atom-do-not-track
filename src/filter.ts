import { getConfig } from './utils';
import { remote } from 'electron';
import { trackingURLs } from './config';
import store from './store';
import { updateCount } from './counter';
import type { ConfigValues } from 'atom';

function composeFilter() {
  const urls: string[] = [];
  const defaultTracking: ConfigValues[string] = getConfig('defaultTracking');

  if (defaultTracking.adobe) urls.push(...trackingURLs.adobe);
  if (defaultTracking.bugsnag) urls.push(...trackingURLs.bugsnag);
  if (defaultTracking.metrics) urls.push(...trackingURLs.metrics);
  if (defaultTracking.analytics) urls.push(...trackingURLs.analytics);
  if (defaultTracking.tagManager) urls.push(...trackingURLs.tagManager);
  if (defaultTracking.matomo) urls.push(...trackingURLs.matomo);
  if (defaultTracking.microsoft) urls.push(...trackingURLs.microsoft);

  let customUrls;
  store.subscribe(value => {
    customUrls = value.customUrls;
  });

  if (customUrls.length) urls.push(...customUrls);

  return { urls };
}

async function init(): Promise<void> {
  const filter = composeFilter();

  remote.session.defaultSession.webRequest.onBeforeSendHeaders(filter, async (details, callback) => {
    console.log('Connection blocked', details);

    await updateCount(details);

    callback({
      cancel: true
    });
  });
}

export {
  init
};
