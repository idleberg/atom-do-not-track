import { CompositeDisposable } from 'atom';
import { getConfig } from './utils';
import disposify from 'disposify';

import Tooltip from './components/tooltip.svelte';
import StatusbarItem from './components/status-bar.svelte';

import type { StatusBar } from 'atom/status-bar';

export default class StatusBarView {
  subscriptions: CompositeDisposable;

  constructor() {
    this.subscriptions = new CompositeDisposable();
  }

  attach(statusBar: StatusBar): void {
    const position = (getConfig('interfaceAlignment') === 'left'
      ? 'addLeftTile'
      : 'addRightTile'
    );

    this.subscriptions.add(
      disposify(
        statusBar[position]({
          item: this.render(),
          priority: 100
        })
      )
    );
  }

  render(): HTMLElement {
      const element = document.createElement('do-not-track-button');
      const tooltip = document.createElement('div');

      atom.tooltips.add(element, {
        item: tooltip
      });

      new Tooltip({
        target: tooltip
      });

      new StatusbarItem({
        target: element
      });

      return element;
  }
}
