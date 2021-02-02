import { CompositeDisposable } from 'atom';
import disposify from 'disposify';
// import './status-bar.scss';
import { getConfig } from '../utils';
import type { StatusBar } from 'atom/status-bar';
import Tooltip from './tooltip.svelte';
import Button from './button.svelte';

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

  elementWithText(text: string, tag = 'div'): HTMLElement {
    const el = document.createElement(tag);
    el.textContent = text;

    return el;
  }
}
