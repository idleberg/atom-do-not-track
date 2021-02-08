import { writable } from 'svelte/store';

export default writable({
  counter: 0,
  buttonClass: 'subtle',
  services: {
    analytics: {
      counter: 0,
      name: 'Google Analytics',
      shortName: 'Analytics'
    },
    matomo: {
      counter: 0,
      name: 'Matomo',
      shortName: 'Matomo'
    },
    metrics: {
      counter: 0,
      name: 'GitHub Metrics',
      shortName: 'Metrics'
    },
    tagManager: {
      counter: 0,
      name: 'Google Tag Manager',
      shortName: 'Tag Manager'
    },
    others: {
      counter: 0,
      name: 'others',
      shortName: 'others'
    }
  }
});
