import { writable } from 'svelte/store';

function loadState() {
  const state = localStorage.getItem('do-not-track:custom-urls') || "[]";

  try {
    const parsedState = JSON.parse(state);
    return parsedState;
  } catch (err) {
    return [];
  }
}

export default writable({
  counter: 0,
  buttonClass: 'subtle',
  services: {
    adobe: {
      counter: 0,
      name: 'Adobe Data API',
      shortName: 'Adobe'
    },
    bugsnag: {
      counter: 0,
      name: 'Bugsnag',
      shortName: 'Bugsnag'
    },
    metrics: {
      counter: 0,
      name: 'Atom Metrics',
      shortName: 'Metrics'
    },
    analytics: {
      counter: 0,
      name: 'Google Analytics',
      shortName: 'Analytics'
    },
    tagManager: {
      counter: 0,
      name: 'Google Tag Manager',
      shortName: 'Tag Manager'
    },
    matomo: {
      counter: 0,
      name: 'Matomo/Piwik',
      shortName: 'Matomo/Piwik'
    },
    microsoft: {
      counter: 0,
      name: 'Microsoft',
      shortName: 'Microsoft'
    },
    sentry: {
      counter: 0,
      name: 'Sentry',
      shortName: 'Sentry'
    },
    yandex: {
      counter: 0,
      name: 'Yandex',
      shortName: 'Yandex'
    },
    others: {
      counter: 0,
      name: 'Others',
      shortName: 'Others'
    },
  },
  customUrls: loadState()
});
