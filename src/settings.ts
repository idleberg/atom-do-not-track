import { CompositeDisposable, Dock } from 'atom';
import { getConfig } from './utils';

import Settings from './components/settings.svelte';

export default class SettingsView {
  subscriptions: CompositeDisposable;

  constructor() {
    this.subscriptions = new CompositeDisposable();
  }

  getTitle(): string {
    return 'Do Not Track';
  }

  getURI(): string {
    return 'atom://do-not-track/settings';
  }

  getDefaultLocation(): string {
    return String(getConfig('interfaceAlignment'));
  }

  getElement(): HTMLElement {
    const element = document.createElement('do-not-track-settings');

    new Settings({
      target: element
    });

    return element;
  }

  getIconName(): string {
    return 'stop';
  }

  getDock(): Dock {
    return (getConfig('interfaceAlignment') === 'left'
      ? atom.workspace.getLeftDock()
      : atom.workspace.getRightDock()
    );
  }

  show(): void {
    atom.workspace.open(this, {
      activatePane: false
    });

    this.getDock().show();
  }

  hide(): void {
    this.getDock().hide();
  }

  toggle(): void {
    atom.workspace.toggle(this);
  }

  destroy(): void {
		if (this?.subscriptions) this.subscriptions.dispose();
	}
}
