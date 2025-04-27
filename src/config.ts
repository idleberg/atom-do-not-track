export const configSchema = {
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
      bugsnag: {
        title: 'Bugsnag',
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
      },
      microsoft: {
        title: 'Microsoft',
        type: 'boolean',
        default: true,
        order: 6
      },
      posthog: {
        title: 'PostHog',
        type: 'boolean',
        default: true,
        order: 7
      },
      sentry: {
        title: 'Sentry',
        type: 'boolean',
        default: true,
        order: 8
      },
      yandex: {
        title: 'Yandex Metrica',
        type: 'boolean',
        default: true,
        order: 9
      }
    }
  }
};

export const trackingURLs = {
  adobe: [
    '*://cc-api-data.adobe.io/*'
  ],
  bugsnag: [
    '*://notify.bugsnag.com/*'
  ],
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
  microsoft: [
    '*://*.pipe.aria.microsoft.com/*'
  ],
  posthog: [
    '*://*.i.posthog.com/*',
  ],
  sentry: [
    '*://*.ingest.sentry.io/*',
  ],
  yandex: [
    '*://api-metrica.yandex.net/*',
    '*://api-metrika.yandex.net/*'
  ]
};
