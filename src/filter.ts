import { getConfig } from './utils';
import { remote } from 'electron';
import { trackingURLs } from './config';
import store from './store';
import { updateCount } from './counter';
import type { ConfigValues } from 'atom';

function composeFilter() {
  const urls: string[] = [];
  const defaultTracking: ConfigValues[string] = getConfig('defaultTracking');

  for (const key of Object.keys(defaultTracking)) {
    if (defaultTracking[key] && trackingURLs[key]) {
      urls.push(...trackingURLs[key]);
    }
  }

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
