import { writable } from 'svelte/store';

export default writable({
  counter: 0,
  buttonClass: 'subtle',
  services: {
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
    others: {
      counter: 0,
      name: 'Others',
      shortName: 'Others'
    }
  }
});
