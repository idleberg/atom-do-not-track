// import matchPattern from 'match-pattern';
import { matchPattern } from 'browser-extension-url-match';

const packageName =  'do-not-track';

function getConfig(key: string): unknown {
  return (key
    ? atom.config.get(`${packageName}.${key}`)
    : atom.config.get(packageName)
  );
}

function persistState(customUrls: string[]): void {
  localStorage.setItem('do-not-track:custom-urls', JSON.stringify(customUrls));
}

function isValidPattern(value: string): boolean {
  const { valid } = matchPattern(value);

  if (!valid) atom.notifications.addError('Invalid URL match pattern. [Need help?](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#examples)');

  return valid;
}

export {
  getConfig,
  isValidPattern,
  persistState
}
