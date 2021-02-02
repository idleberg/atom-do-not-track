export default {
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
    default: false,
    order: 2
  },
  defaultTracking: {
    title: 'Default Tracking',
    description: 'Default tracking URLs that can be blocked',
    type: 'object',
    order: 3,
    properties: {
      metrics: {
        title: 'Atom Metrics',
        type: 'boolean',
        default: true,
        order: 1
      },
      analytics: {
        title: 'Google Analytics',
        type: 'boolean',
        default: true,
        order: 2
      },
      tagManager: {
        title: 'Google Tag Manager',
        type: 'boolean',
        default: true,
        order: 2
      },
      matomo: {
        title: 'Matomo',
        type: 'boolean',
        default: true,
        order: 3
      }
    }
  }
};
