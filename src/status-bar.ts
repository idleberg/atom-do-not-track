import { CompositeDisposable } from 'atom';
import { getConfig } from './utils';
import disposify from 'disposify';

import Tooltip from './components/tooltip.svelte';
import Button from './components/button.svelte';

import type { StatusBar } from 'atom/status-bar';

export default class StatusBarView {
  subscriptions: CompositeDisposable;

  constructor() {
    this.subscriptions = new CompositeDisposable();
  }

  attach(statusBar: StatusBar): void {
    const interfaceAlignment = getConfig('interfaceAlignment');
    const position = interfaceAlignment === 'left'
      ? 'addLeftTile'
      : 'addRightTile';

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
      const element = document.createElement('do-not-track-status-bar');

      const tooltip = document.createElement('div');
      tooltip.id = 'tooltip';
      atom.tooltips.add(element, { item: tooltip });

      new Tooltip({
        target: tooltip
      });

      new Button({
        target: element
      });

      return element;
  }
}
