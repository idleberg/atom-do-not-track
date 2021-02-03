import { CompositeDisposable } from 'atom';
import { getConfig } from './utils';
import disposify from 'disposify';

import Button from './components/button.svelte';
import Tooltip from './components/tooltip.svelte';

import type { StatusBar } from 'atom/status-bar';

export default class StatusBarView {
  subscriptions: CompositeDisposable;

  constructor() {
    this.subscriptions = new CompositeDisposable();
  }

  attach(statusBar: StatusBar): void {
    const addTile = getConfig('interfaceAlignment') === 'left'
      ? 'addLeftTile'
      : 'addRightTile';

    this.subscriptions.add(
      disposify(
        statusBar[addTile]({
          item: this.render(),
          priority: 100
        })
      )
    );
  }

  render(): HTMLElement {
      const element = document.createElement('do-not-track-status-bar');

      const tooltip = document.createElement('div');
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
