import { CompositeDisposable } from "atom";
import configSchema from "./config";
import initFilter from './filter';
import StatusBarView from "./status-bar";

import type { StatusBar } from 'atom/status-bar';

export default {
  config: configSchema,
  subscriptions: null,
  instance: null,

  async activate(): Promise<void> {
    initFilter();

    this.instance = new StatusBarView();

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register commands
    this.subscriptions.add(
      atom.commands.add("atom-workspace", {
        "do-not-track:hello-world": () => {
          console.log('Hello World');
        },
      })
    );
  },

  deactivate(): void {
    this.subscriptions?.dispose();
  },

  consumeStatusBar(statusBar: StatusBar): void {
    this.instance.attach(statusBar);
    // SettingsView.attach();
  }
};
