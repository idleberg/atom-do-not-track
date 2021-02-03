import { CompositeDisposable } from 'atom';
import configSchema from './config';
import initFilter from './filter';
import SettingsView from './settings';
import StatusBarView from './status-bar';

import type { StatusBar } from 'atom/status-bar';

export default {
  config: configSchema,
  subscriptions: null,
  settings: null,
  statusbar: null,

  async activate(): Promise<void> {
    initFilter();

    this.settings = new SettingsView();
    this.statusbar = new StatusBarView();

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register commands
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'do-not-track:toggle-settings': () => {
          this.settings.toggle();
        },
      })
    );
  },

  deactivate(): void {
    this.subscriptions?.dispose();
    this.settings.destroy();
  },

  consumeStatusBar(statusBar: StatusBar): void {
    this.statusbar.attach(statusBar);
  }
};
