const configSchema = {
  interfaceAlignment: {
    title: 'Interface Alignment',
    description: 'Specifies on which side the UI aligns. The change will only take effect on the next launch.',
    type: 'string',
    order: 1,
    enum: [
      {
        value: 'left',
        description: 'left'
      },
      {
        value: 'right',
        description: 'right'
      }
    ],
    default: 'right'
  },
  alwaysShowCounter: {
    title: 'Always Show Counter',
    description: 'Displays a counter next to the status-bar icon',
    type: 'boolean',
    default: true,
    order: 2
  },
  defaultTracking: {
    title: 'Default Tracking',
    description: 'Default tracking URLs that can be blocked',
    type: 'object',
    order: 3,
    properties: {
      adobe: {
        title: 'Adobe',
        type: 'boolean',
        default: true,
        order: 1
      },
      metrics: {
        title: 'Atom Metrics',
        type: 'boolean',
        default: true,
        order: 2
      },
      analytics: {
        title: 'Google Analytics',
        type: 'boolean',
        default: true,
        order: 3
      },
      tagManager: {
        title: 'Google Tag Manager',
        type: 'boolean',
        default: true,
        order: 4
      },
      matomo: {
        title: 'Matomo/Piwik',
        type: 'boolean',
        default: true,
        order: 5
      }
    }
  }
};

const trackingURLs = {
  metrics: [
    '*://central.github.com/api/usage/atom'
  ],
  analytics: [
    '*://*.app-measurement.com/*',
    '*://app-measurement.com/*',
    '*://*.google-analytics.com/*',
    '*://google-analytics.com/*'
  ],
  tagManager: [
    '*://*.googletagmanager.com/*',
    '*://googletagmanager.com/*'
  ],
  matomo: [
    '*://*/*matomo.js*',
    '*://*/*matomo.php*',
    '*://*/*piwik.js*',
    '*://*/*piwik.php*'
  ],
  adobe: [
    '*://cc-api-data.adobe.io/*'
  ]
};

export {
  configSchema,
  trackingURLs
};
