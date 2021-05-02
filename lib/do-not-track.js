'use strict';

var atom$1 = require('atom');
var electron = require('electron');
var require$$0 = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var configSchema = {
    interfaceAlignment: {
        title: 'Interface Alignment',
        description: 'Specifies on which side the UI aligns. The change will only take effect on the next launch.',
        type: 'string',
        order: 1,
        "enum": [
            {
                value: 'left',
                description: 'left'
            },
            {
                value: 'right',
                description: 'right'
            }
        ],
        "default": 'right'
    },
    alwaysShowCounter: {
        title: 'Always Show Counter',
        description: 'Displays a counter next to the status-bar icon',
        type: 'boolean',
        "default": true,
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
                "default": true,
                order: 1
            },
            analytics: {
                title: 'Google Analytics',
                type: 'boolean',
                "default": true,
                order: 2
            },
            tagManager: {
                title: 'Google Tag Manager',
                type: 'boolean',
                "default": true,
                order: 2
            },
            matomo: {
                title: 'Matomo/Piwik',
                type: 'boolean',
                "default": true,
                order: 3
            }
        }
    }
};
var trackingURLs = {
    metrics: [
        '*://central.github.com/api/usage/atom'
    ],
    analytics: [
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
    ]
};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var config = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = exports.presets = void 0;
const presets = {
  chrome: {
    supportedSchemes: ['http', 'https', 'file', 'ftp'],
    schemeStarMatchesWs: false
  },
  firefox: {
    supportedSchemes: ['http', 'https', 'ws', 'wss', 'ftp', 'ftps', 'data', 'file'],
    schemeStarMatchesWs: true
  }
};
exports.presets = presets;
const defaultOptions = Object.assign(Object.assign({}, presets.chrome), {
  strict: true
});
exports.defaultOptions = defaultOptions;
});

var regex_2 = regex;
const flagMap = {
  global: 'g',
  ignoreCase: 'i',
  multiline: 'm',
  dotAll: 's',
  sticky: 'y',
  unicode: 'u'
};
const commentRegex = /(\\*)#(.*)/g;

const commentReplacer = (_m, slashes, after) => {
  /* If odd number of backslashes, one of them is esc char */
  if (slashes.length % 2) {
    return slashes.slice(1)
    /* Consumes esc char */
    + '#' + after.replace(commentRegex, commentReplacer);
  }

  return slashes;
};

const _regex = (options = {}) => (template, ...substitutions) => {
  let source = '';
  template.raw.forEach((segment, idx) => {
    source += segment
    /* Remove comments following unescaped # */
    .replace(commentRegex, commentReplacer)
    /*
        Replace escaped ` with literal.
        Must be odd number of backslashes
        because otherwise would terminate the template string.
    */
    .replace(/\\`/g, '`')
    /*
        Escaped ${ is a no-op.
        We use literal $ rather than regex $ (end-of-string)
        because followed by {, thus cannot be end-of-string.
    */
    // .replace(/\\\${/g, '$&') // no-op

    /* Collapse whitespace */
    .replace(/(\\*)(\s+)/g, (_m, slashes, space) => {
      /* If odd number of backslashes, one of them is esc char */
      if (space[0] === ' ' && slashes.length % 2) {
        /* Consumes esc char and escapes a single space char */

        /* Escaping Tab, CR, LF not supported */

        /* Use \t, \r, \n instead */
        return slashes.slice(1) + space[0];
      }

      return slashes;
    });
    const sub = substitutions[idx];

    if (sub instanceof RegExp) {
      source += sub.source;
    } else {
      source += sub !== null && sub !== void 0 ? sub : '';
    }
  });
  let flags = '';

  if (typeof options === 'string') {
    flags = options;
  } else {
    Object.entries(flagMap).forEach(([k, v]) => {
      if (options[k]) {
        flags += v;
      }
    });
  }

  return new RegExp(source, flags);
};

function regex(...args) {
  if (Array.isArray(args[0])) {
    const [template, ...substitutions] = args;
    return _regex('')(template, ...substitutions);
  } else {
    const [flags] = args;
    return _regex(flags);
  }
}

var regex_1 = /*#__PURE__*/Object.defineProperty({
	regex: regex_2
}, '__esModule', {value: true});

var regexEscape_1 = regexEscape;
var exact_2 = exact;



function regexEscape(input) {
  const fragment = input.replace(/[$()*+\-.?[\\\]^{|}]/g, m => {
    const digits = m.codePointAt(0).toString(16).padStart(2, '0');
    return `\\x${digits}`;
  });
  return fragment;
}

function exact(input, flags) {
  return (0, regex_1.regex)(flags)`${regexEscape(input)}`;
}

var exact_1 = /*#__PURE__*/Object.defineProperty({
	regexEscape: regexEscape_1,
	exact: exact_2
}, '__esModule', {value: true});

var unwrap_2 = unwrap;



function unwrap(re, flags) {
  const fragment = re.source.replace(/^\^?([\s\S]*?)\$?$/, '$1');
  return (0, regex_1.regex)(flags !== null && flags !== void 0 ? flags : re.flags)`${fragment}`;
}

var unwrap_1 = /*#__PURE__*/Object.defineProperty({
	unwrap: unwrap_2
}, '__esModule', {value: true});

var proxy_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.proxy = void 0;



const proxy = new Proxy(regex_1.regex, {
  get(target, flags) {
    return target(flags === '_' ? '' : flags);
  },

  apply(target, _thisArg, args) {
    return target(...args);
  }

});
exports.proxy = proxy;
});

var dist$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "regex", {
  enumerable: true,
  get: function () {
    return regex_1.regex;
  }
});
Object.defineProperty(exports, "exact", {
  enumerable: true,
  get: function () {
    return exact_1.exact;
  }
});
Object.defineProperty(exports, "regexEscape", {
  enumerable: true,
  get: function () {
    return exact_1.regexEscape;
  }
});
Object.defineProperty(exports, "unwrap", {
  enumerable: true,
  get: function () {
    return unwrap_1.unwrap;
  }
});
Object.defineProperty(exports, "proxy", {
  enumerable: true,
  get: function () {
    return proxy_1.proxy;
  }
});
});

var getDummyUrl_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDummyUrl = void 0;



const DELIMS = /^|$|[/?=&\-]/;

const getDummyUrl = (patternSegments, replacements = {}) => {
  const {
    rawHost,
    rawPathAndQuery
  } = patternSegments;
  const {
    defaultScheme = 'https',
    subdomain = '',
    pathAndQueryReplacer = '',
    rootDomain = 'example.com',
    strict = true
  } = replacements;
  let host;
  const scheme = patternSegments.scheme === '*' ? defaultScheme : patternSegments.scheme;

  if (scheme === 'file') {
    host = '';
  } else if (rawHost === '*') {
    host = [subdomain, rootDomain].filter(Boolean).join('.');
  } else {
    host = rawHost.replace(/^\*./, subdomain ? `${subdomain}.` : '');
  }

  const pathAndQuery = (strict ? rawPathAndQuery : '/*'). // start with hyphen-delimited
  replace(/\*/g, `-${pathAndQueryReplacer}-`) // remove consecutive hyphens and hyphens adjacent to delimiters
  .replace((0, dist$1.regex)('g')`-+(${DELIMS})`, '$1').replace((0, dist$1.regex)('g')`(${DELIMS})-+`, '$1') // remove consecutive slashes
  .replace(/\/+/g, '/');

  try {
    return new URL(`${scheme}://${host}${pathAndQuery}`);
  } catch (_e) {
    return null;
  }
};

exports.getDummyUrl = getDummyUrl;
});

var getPatternSegments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPatternSegments = void 0;



const patternRegex = (dist$1.regex)`
	^
		(\*|\w+)      # scheme
		://
		(
			\*     |  # Any host
			[^/]*     # Only the given host (optional only if scheme is file)
		)
		(/.*)         # path
	$
`;

const getPatternSegments = pattern => {
  if (pattern === '<all_urls>') {
    return {
      pattern,
      scheme: '*',
      rawHost: '*',
      rawPathAndQuery: '/*'
    };
  }

  const m = pattern.match(patternRegex);
  if (!m) return null;
  const [,
  /* fullMatch */
  scheme, rawHost, rawPathAndQuery] = m;
  return {
    pattern,
    scheme,
    rawHost,
    rawPathAndQuery
  };
};

exports.getPatternSegments = getPatternSegments;
});

var getExampleUrls_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExampleUrls = void 0;





const getExampleUrls = (pattern, options) => {
  const patternSegments = (0, getPatternSegments_1.getPatternSegments)(pattern);
  const {
    supportedSchemes,
    strict
  } = options;
  const subdomains = ['', 'www', 'foo.bar'];
  const rootDomains = ['example.com'];
  const pathAndQueryReplacers = ['', 'foo', '/bar/baz/'];
  const all = supportedSchemes.flatMap(defaultScheme => subdomains.flatMap(subdomain => rootDomains.flatMap(rootDomain => pathAndQueryReplacers.flatMap(pathAndQueryReplacer => (0, getDummyUrl_1.getDummyUrl)(patternSegments, {
    defaultScheme,
    subdomain,
    rootDomain,
    pathAndQueryReplacer,
    strict
  })))));
  return [...new Set(all.filter(Boolean).map(url => url.href))];
};

exports.getExampleUrls = getExampleUrls;
});

var constants = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_URLS = void 0;
const ALL_URLS = '<all_urls>';
exports.ALL_URLS = ALL_URLS;
});

var getHostRegex_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHostRegex = void 0;





const getHostRegex = patternSegments => {
  const {
    pattern,
    scheme,
    rawHost
  } = patternSegments;

  if (!rawHost && scheme !== 'file') {
    return new Error('Host is optional only if the scheme is "file".');
  }

  const isStarHost = rawHost.includes('*');

  if (isStarHost) {
    const segments = rawHost.split('*.');

    if (rawHost.length > 1 && (segments.length !== 2 || segments[0] || !segments[1])) {
      return new Error('Host can contain only one wildcard at the start, in the form "*.<host segments>"');
    }
  }

  const dummyUrl = (0, getDummyUrl_1.getDummyUrl)(patternSegments, {
    subdomain: ''
  });

  if (!dummyUrl) {
    return new Error(`Pattern "${pattern}" cannot be used to construct a valid URL.`);
  }

  const dummyHost = dummyUrl.host;

  if (/:\d+$/.test(dummyHost)) {
    return new Error(`Host "${rawHost}" cannot include a port number. All ports are matched by default.`);
  }

  if (/[^.a-z0-9\-]/.test(dummyHost)) {
    return new Error(`Host "${rawHost}" contains invalid characters.`);
  }

  const host = isStarHost ? '*.' + dummyHost : dummyHost;

  if (rawHost === '*') {
    return /.+/;
  } else if (host.startsWith('*.')) {
    return (dist$1.regex)`
			^
				(?:[^.]+\.)*     # any number of dot-terminated segments
				${(0, dist$1.regexEscape)(host.slice(2))}   # rest after leading *.
			$
		`;
  } else {
    return (dist$1.regex)`^${(0, dist$1.regexEscape)(host)}$`;
  }
};

exports.getHostRegex = getHostRegex;
});

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMatchFn = exports.normalizeUrlFragment = void 0;

const normalizeUrlFragment = urlFragent => {
  try {
    return encodeURI(decodeURI(urlFragent));
  } catch (e) {
    return e;
  }
};

exports.normalizeUrlFragment = normalizeUrlFragment;

const createMatchFn = fn => url => {
  let normalizedUrl;

  try {
    const urlStr = url instanceof URL ? url.href : url;
    normalizedUrl = new URL(urlStr);
    const normalizedPathname = normalizeUrlFragment(normalizedUrl.pathname);
    const normalizedSearch = normalizeUrlFragment(normalizedUrl.search);

    if (normalizedPathname instanceof Error || normalizedSearch instanceof Error) {
      return false;
    }

    normalizedUrl.pathname = normalizedPathname;

    if (!normalizedUrl.href.endsWith('?')) {
      // avoid nuking zero-search-string
      normalizedUrl.search = normalizedSearch;
    }
  } catch (_e) {
    return false;
  }

  return fn(normalizedUrl);
};

exports.createMatchFn = createMatchFn;
});

var toMatcherOrError = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toMatchFnOrError = void 0;











const toMatchFnOrError = (pattern, options) => {
  const {
    supportedSchemes,
    schemeStarMatchesWs,
    strict
  } = options;

  if (pattern === constants.ALL_URLS) {
    return (0, utils.createMatchFn)(url => {
      return (dist$1.regex)`
				^
					(?:${supportedSchemes.map(dist$1.regexEscape).join('|')})
					:
				$
			`.test(url.protocol);
    });
  }

  const patternSegments = (0, getPatternSegments_1.getPatternSegments)(pattern);

  if (!patternSegments) {
    return new Error(`Pattern "${pattern}" is invalid`);
  }

  const {
    scheme,
    rawPathAndQuery
  } = patternSegments;
  /* Scheme */

  if (scheme !== '*' && !supportedSchemes.includes(scheme)) {
    return new Error(`Scheme "${scheme}" is not supported`);
  }

  const schemeRegex = (dist$1.regex)`${scheme === '*' ? ['https?', schemeStarMatchesWs && 'wss?'].filter(Boolean).join('|') : scheme}:`;
  /* Host */

  const hostRegex = (0, getHostRegex_1.getHostRegex)(patternSegments);

  if (hostRegex instanceof Error) {
    return hostRegex;
  }
  /* Path and query string */
  // Non-strict used for host permissions.
  // "The path must be present in a host permission, but is always treated as /*."
  // See https://developer.chrome.com/docs/extensions/mv3/match_patterns/


  const pathAndQuery = strict ? (0, utils.normalizeUrlFragment)(rawPathAndQuery) : '/*';

  if (pathAndQuery instanceof Error) {
    return pathAndQuery;
  }

  const pathAndQueryRegex = (dist$1.regex)`^${pathAndQuery.split('*').map(x => (0, dist$1.regexEscape)(x)).join('.*')}$`;
  return (0, utils.createMatchFn)(url => {
    // respect zero-search-string
    const pathAndQuery = url.pathname + (url.href.endsWith('?') ? '?' : url.search);
    return schemeRegex.test(url.protocol) && hostRegex.test(url.host) && pathAndQueryRegex.test(pathAndQuery);
  });
};

exports.toMatchFnOrError = toMatchFnOrError;
});

var matchPattern_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchPattern = exports.matchPatternWithConfig = void 0;







const matchPatternWithConfig = options => pattern => {
  const combinedOptions = Object.assign(Object.assign({}, config.defaultOptions), options);
  const val = (0, toMatcherOrError.toMatchFnOrError)(pattern, combinedOptions);
  return val instanceof Error ? {
    valid: false,
    error: val,
    match: () => false,

    get examples() {
      return [];
    },

    pattern,
    config: combinedOptions
  } : {
    valid: true,
    match: val,

    get examples() {
      return (0, getExampleUrls_1.getExampleUrls)(pattern, combinedOptions) // sanity check - examples should all match
      .filter(url => val(url)) // prevent example list from getting too long
      .slice(0, 100);
    },

    pattern,
    config: combinedOptions
  };
};

exports.matchPatternWithConfig = matchPatternWithConfig;
const matchPattern = matchPatternWithConfig({});
exports.matchPattern = matchPattern;
});

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "matchPattern", {
  enumerable: true,
  get: function () {
    return matchPattern_1.matchPattern;
  }
});
Object.defineProperty(exports, "matchPatternWithConfig", {
  enumerable: true,
  get: function () {
    return matchPattern_1.matchPatternWithConfig;
  }
});
Object.defineProperty(exports, "presets", {
  enumerable: true,
  get: function () {
    return config.presets;
  }
});
});

// import matchPattern from 'match-pattern';
var packageName = 'do-not-track';
function getConfig(key) {
    return (key
        ? atom.config.get(packageName + "." + key)
        : atom.config.get(packageName));
}
function persistState(customUrls) {
    localStorage.setItem('do-not-track:custom-urls', JSON.stringify(customUrls));
}
function isValidPattern(value) {
    var valid = dist.matchPattern(value).valid;
    if (!valid)
        atom.notifications.addError('Invalid URL match pattern. [Need help?](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#examples)');
    return valid;
}

function noop() { }
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = value;
    }
    else {
        attr(node, prop, value);
    }
}
function children(element) {
    return Array.from(element.childNodes);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
    if (flushing)
        return;
    flushing = true;
    do {
        // first, call beforeUpdate functions
        // and update components
        for (let i = 0; i < dirty_components.length; i += 1) {
            const component = dirty_components[i];
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}

const globals = (typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
        ? globalThis
        : global);
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init$1(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : options.context || []),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.37.0' }, detail)));
}
function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', { node });
    detach(node);
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
    else
        dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data)
        return;
    dispatch_dev('SvelteDOMSetData', { node: text, data });
    text.data = data;
}
function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        let msg = '{#each} only iterates over array-like objects.';
        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
            msg += ' You can use a spread to convert this iterable into an array.';
        }
        throw new Error(msg);
    }
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
    }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error("'target' is a required option");
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
    }
    $capture_state() { }
    $inject_state() { }
}

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

function loadState() {
    var state = localStorage.getItem('do-not-track:custom-urls') || "[]";
    try {
        var parsedState = JSON.parse(state);
        return parsedState;
    }
    catch (err) {
        return [];
    }
}
var store = writable({
    counter: 0,
    buttonClass: 'subtle',
    services: {
        metrics: {
            counter: 0,
            name: 'Atom Metrics',
            shortName: 'Metrics'
        },
        analytics: {
            counter: 0,
            name: 'Google Analytics',
            shortName: 'Analytics'
        },
        tagManager: {
            counter: 0,
            name: 'Google Tag Manager',
            shortName: 'Tag Manager'
        },
        matomo: {
            counter: 0,
            name: 'Matomo/Piwik',
            shortName: 'Matomo/Piwik'
        },
        others: {
            counter: 0,
            name: 'Others',
            shortName: 'Others'
        }
    },
    customUrls: loadState()
});

var concatMap = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

var balancedMatch = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    if(a===b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}

var braceExpansion = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balancedMatch('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balancedMatch('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length);
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}

var minimatch_1 = minimatch;
minimatch.Minimatch = Minimatch;

var path = { sep: '/' };
try {
  path = require$$0__default['default'];
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};


var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
};

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]';

// * => any number of characters
var star = qmark + '*?';

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?';

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?';

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!');

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true;
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/;

minimatch.filter = filter;
function filter (pattern, options) {
  options = options || {};
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {};
  b = b || {};
  var t = {};
  Object.keys(b).forEach(function (k) {
    t[k] = b[k];
  });
  Object.keys(a).forEach(function (k) {
    t[k] = a[k];
  });
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch;

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  };

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  };

  return m
};

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
};

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {};

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {};
  pattern = pattern.trim();

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/');
  }

  this.options = options;
  this.set = [];
  this.pattern = pattern;
  this.regexp = null;
  this.negate = false;
  this.comment = false;
  this.empty = false;

  // make the set of regexps etc.
  this.make();
}

Minimatch.prototype.debug = function () {};

Minimatch.prototype.make = make;
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern;
  var options = this.options;

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true;
    return
  }
  if (!pattern) {
    this.empty = true;
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate();

  // step 2: expand braces
  var set = this.globSet = this.braceExpand();

  if (options.debug) this.debug = console.error;

  this.debug(this.pattern, set);

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  });

  this.debug(this.pattern, set);

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this);

  this.debug(this.pattern, set);

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  });

  this.debug(this.pattern, set);

  this.set = set;
}

Minimatch.prototype.parseNegate = parseNegate;
function parseNegate () {
  var pattern = this.pattern;
  var negate = false;
  var options = this.options;
  var negateOffset = 0;

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate;
    negateOffset++;
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset);
  this.negate = negate;
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
};

Minimatch.prototype.braceExpand = braceExpand;

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options;
    } else {
      options = {};
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern;

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return braceExpansion(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse;
var SUBPARSE = {};
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options;

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = '';
  var hasMagic = !!options.nocase;
  var escaping = false;
  // ? => one single character
  var patternListStack = [];
  var negativeLists = [];
  var stateChar;
  var inClass = false;
  var reClassStart = -1;
  var classStart = -1;
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)';
  var self = this;

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star;
          hasMagic = true;
        break
        case '?':
          re += qmark;
          hasMagic = true;
        break
        default:
          re += '\\' + stateChar;
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re);
      stateChar = false;
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c);

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c;
      escaping = false;
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar();
        escaping = true;
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class');
          if (c === '!' && i === classStart + 1) c = '^';
          re += c;
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar);
        clearStateChar();
        stateChar = c;
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar();
      continue

      case '(':
        if (inClass) {
          re += '(';
          continue
        }

        if (!stateChar) {
          re += '\\(';
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        });
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:';
        this.debug('plType %j %j', stateChar, re);
        stateChar = false;
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)';
          continue
        }

        clearStateChar();
        hasMagic = true;
        var pl = patternListStack.pop();
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close;
        if (pl.type === '!') {
          negativeLists.push(pl);
        }
        pl.reEnd = re.length;
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|';
          escaping = false;
          continue
        }

        clearStateChar();
        re += '|';
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar();

        if (inClass) {
          re += '\\' + c;
          continue
        }

        inClass = true;
        classStart = i;
        reClassStart = re.length;
        re += c;
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c;
          escaping = false;
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i);
          try {
            RegExp('[' + cs + ']');
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE);
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]';
            hasMagic = hasMagic || sp[1];
            inClass = false;
            continue
          }
        }

        // finish up the class.
        hasMagic = true;
        inClass = false;
        re += c;
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar();

        if (escaping) {
          // no need
          escaping = false;
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\';
        }

        re += c;

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1);
    sp = this.parse(cs, SUBPARSE);
    re = re.substr(0, reClassStart) + '\\[' + sp[0];
    hasMagic = hasMagic || sp[1];
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length);
    this.debug('setting tail', re, pl);
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\';
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    });

    this.debug('tail=%j\n   %s', tail, tail, pl, re);
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type;

    hasMagic = true;
    re = re.slice(0, pl.reStart) + t + '\\(' + tail;
  }

  // handle trailing things that only matter at the very end.
  clearStateChar();
  if (escaping) {
    // trailing \\
    re += '\\\\';
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false;
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true;
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n];

    var nlBefore = re.slice(0, nl.reStart);
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
    var nlAfter = re.slice(nl.reEnd);

    nlLast += nlAfter;

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1;
    var cleanAfter = nlAfter;
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
    }
    nlAfter = cleanAfter;

    var dollar = '';
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$';
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
    re = newRe;
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re;
  }

  if (addPatternStart) {
    re = patternStart + re;
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : '';
  try {
    var regExp = new RegExp('^' + re + '$', flags);
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern;
  regExp._src = re;

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
};

Minimatch.prototype.makeRe = makeRe;
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set;

  if (!set.length) {
    this.regexp = false;
    return this.regexp
  }
  var options = this.options;

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot;
  var flags = options.nocase ? 'i' : '';

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|');

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$';

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$';

  try {
    this.regexp = new RegExp(re, flags);
  } catch (ex) {
    this.regexp = false;
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {};
  var mm = new Minimatch(pattern, options);
  list = list.filter(function (f) {
    return mm.match(f)
  });
  if (mm.options.nonull && !list.length) {
    list.push(pattern);
  }
  return list
};

Minimatch.prototype.match = match;
function match (f, partial) {
  this.debug('match', f, this.pattern);
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options;

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/');
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit);
  this.debug(this.pattern, 'split', f);

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set;
  this.debug(this.pattern, 'set', set);

  // Find the basename of the path by looking for the last non-empty segment
  var filename;
  var i;
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i];
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i];
    var file = f;
    if (options.matchBase && pattern.length === 1) {
      file = [filename];
    }
    var hit = this.matchOne(file, pattern, partial);
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options;

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern });

  this.debug('matchOne', file.length, pattern.length);

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop');
    var p = pattern[pi];
    var f = file[fi];

    this.debug(pattern, p, f);

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f]);

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi;
      var pr = pi + 1;
      if (pr === pl) {
        this.debug('** at the end');
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr];

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee);
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr);
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue');
          fr++;
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit;
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase();
      } else {
        hit = f === p;
      }
      this.debug('string match', p, f, hit);
    } else {
      hit = f.match(p);
      this.debug('pattern match', p, f, hit);
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '');
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
};

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

var arrayUnion = (...arguments_) => {
	return [...new Set([].concat(...arguments_))];
};

const arrayDiffer = (array, ...values) => {
	const rest = new Set([].concat(...values));
	return array.filter(element => !rest.has(element));
};

var arrayDiffer_1 = arrayDiffer;

const arrify = value => {
	if (value === null || value === undefined) {
		return [];
	}

	if (Array.isArray(value)) {
		return value;
	}

	if (typeof value === 'string') {
		return [value];
	}

	if (typeof value[Symbol.iterator] === 'function') {
		return [...value];
	}

	return [value];
};

var arrify_1 = arrify;

var multimatch = (list, patterns, options = {}) => {
	list = arrify_1(list);
	patterns = arrify_1(patterns);

	if (list.length === 0 || patterns.length === 0) {
		return [];
	}

	let result = [];
	for (const item of list) {
		for (let pattern of patterns) {
			let process = arrayUnion;

			if (pattern[0] === '!') {
				pattern = pattern.slice(1);
				process = arrayDiffer_1;
			}

			result = process(result, minimatch_1.match([item], pattern, options));
		}
	}

	return result;
};

function updateCount(details) {
    store.update(function (state) {
        state.counter += 1;
        state.buttonClass = 'error';
        switch (true) {
            case multimatch(details.url, trackingURLs.metrics).length > 0:
                state.services.metrics.counter += 1;
                break;
            case multimatch(details.url, trackingURLs.analytics).length > 0:
                state.services.analytics.counter += 1;
                break;
            case multimatch(details.url, trackingURLs.tagManager).length > 0:
                state.services.tagManager.counter += 1;
                break;
            case multimatch(details.url, trackingURLs.matomo).length > 0:
            case details.url.includes('matomo.js'):
            case details.url.includes('matomo.php'):
            case details.url.includes('piwik.js'):
            case details.url.includes('piwik.php'):
                state.services.matomo.counter += 1;
                break;
            default:
                state.services.others.counter += 1;
        }
        return state;
    });
}

function composeFilter() {
    var urls = [];
    var defaultTracking = getConfig('defaultTracking');
    if (defaultTracking.metrics)
        urls.push.apply(urls, trackingURLs.metrics);
    if (defaultTracking.analytics)
        urls.push.apply(urls, trackingURLs.analytics);
    if (defaultTracking.tagManager)
        urls.push.apply(urls, trackingURLs.tagManager);
    if (defaultTracking.matomo)
        urls.push.apply(urls, trackingURLs.matomo);
    var customUrls;
    store.subscribe(function (value) {
        customUrls = value.customUrls;
    });
    if (customUrls.length)
        urls.push.apply(urls, customUrls);
    return { urls: urls };
}
function init() {
    var filter = composeFilter();
    electron.remote.session.defaultSession.webRequest.onBeforeSendHeaders(filter, function (details, callback) {
        console.log('Connection blocked', details);
        updateCount(details);
        callback({
            cancel: true
        });
    });
}

/* src/components/list-item.svelte generated by Svelte v3.37.0 */

const file$3 = "src/components/list-item.svelte";

function add_css$3() {
	var style = element("style");
	style.id = "svelte-3h6cae-style";
	style.textContent = "list-item.svelte-3h6cae{display:flex;justify-content:space-between;line-height:1.5;margin-bottom:5px;margin-top:5px}divider.svelte-3h6cae{border-top:1px dashed;flex:1 1 0;margin-right:10px;margin-top:.80em;vertical-align:center}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLnN2ZWx0ZSIsIm1hcHBpbmdzIjoiQUFvQ0UsU0FBUyxjQUFDLENBQUEsQUFDUixPQUFPLENBQUUsSUFBSSxDQUNiLGVBQWUsQ0FBRSxhQUFhLENBQzlCLFdBQVcsQ0FBRSxHQUFHLENBQ2hCLGFBQWEsQ0FBRSxHQUFHLENBQ2xCLFVBQVUsQ0FBRSxHQUFHLEFBQ2pCLENBQUEsQUFFQSxPQUFPLGNBQUMsQ0FBQSxBQUNOLFVBQVUsQ0FBRSxHQUFHLENBQUMsTUFBTSxDQUN0QixJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ1gsWUFBWSxDQUFFLElBQUksQ0FDbEIsVUFBVSxDQUFFLEtBQUssQ0FDakIsY0FBYyxDQUFFLE1BQU0sQUFDeEIsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJsaXN0LWl0ZW0uc3ZlbHRlIl19 */";
	append_dev(document.head, style);
}

// (29:2) {:else}
function create_else_block(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text(/*counter*/ ctx[1]);
			attr_dev(div, "class", "inline-block");
			add_location(div, file$3, 29, 4, 543);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*counter*/ 2) set_data_dev(t, /*counter*/ ctx[1]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(29:2) {:else}",
		ctx
	});

	return block;
}

// (25:2) {#if highlight}
function create_if_block(ctx) {
	let code;
	let t;
	let code_class_value;

	const block = {
		c: function create() {
			code = element("code");
			t = text(/*counter*/ ctx[1]);
			attr_dev(code, "class", code_class_value = "inline-block " + getHighlightClass(/*counter*/ ctx[1]));
			add_location(code, file$3, 25, 4, 444);
		},
		m: function mount(target, anchor) {
			insert_dev(target, code, anchor);
			append_dev(code, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*counter*/ 2) set_data_dev(t, /*counter*/ ctx[1]);

			if (dirty & /*counter*/ 2 && code_class_value !== (code_class_value = "inline-block " + getHighlightClass(/*counter*/ ctx[1]))) {
				attr_dev(code, "class", code_class_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(code);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(25:2) {#if highlight}",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let list_item;
	let div;
	let t0;
	let t1;
	let divider;
	let t2;

	function select_block_type(ctx, dirty) {
		if (/*highlight*/ ctx[2]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			list_item = element("list-item");
			div = element("div");
			t0 = text(/*name*/ ctx[0]);
			t1 = space();
			divider = element("divider");
			t2 = space();
			if_block.c();
			attr_dev(div, "class", "inline-block");
			add_location(div, file$3, 22, 2, 370);
			attr_dev(divider, "class", "svelte-3h6cae");
			add_location(divider, file$3, 23, 2, 411);
			set_custom_element_data(list_item, "class", "svelte-3h6cae");
			add_location(list_item, file$3, 21, 0, 356);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, list_item, anchor);
			append_dev(list_item, div);
			append_dev(div, t0);
			append_dev(list_item, t1);
			append_dev(list_item, divider);
			append_dev(list_item, t2);
			if_block.m(list_item, null);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*name*/ 1) set_data_dev(t0, /*name*/ ctx[0]);

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(list_item, null);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(list_item);
			if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function getHighlightClass(counter) {
	switch (true) {
		case parseInt(counter, 10) >= 100:
			return "highlight-error";
		case parseInt(counter, 10) >= 25:
			return "highlight-warning";
		default:
			return "highlight-info";
	}
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("List_item", slots, []);
	let { name } = $$props;
	let { counter } = $$props;
	let { highlight } = $$props;
	const writable_props = ["name", "counter", "highlight"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<List_item> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("counter" in $$props) $$invalidate(1, counter = $$props.counter);
		if ("highlight" in $$props) $$invalidate(2, highlight = $$props.highlight);
	};

	$$self.$capture_state = () => ({
		name,
		counter,
		highlight,
		getHighlightClass
	});

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("counter" in $$props) $$invalidate(1, counter = $$props.counter);
		if ("highlight" in $$props) $$invalidate(2, highlight = $$props.highlight);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [name, counter, highlight];
}

class List_item extends SvelteComponentDev {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-3h6cae-style")) add_css$3();
		init$1(this, options, instance$3, create_fragment$3, safe_not_equal, { name: 0, counter: 1, highlight: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "List_item",
			options,
			id: create_fragment$3.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*name*/ ctx[0] === undefined && !("name" in props)) {
			console.warn("<List_item> was created without expected prop 'name'");
		}

		if (/*counter*/ ctx[1] === undefined && !("counter" in props)) {
			console.warn("<List_item> was created without expected prop 'counter'");
		}

		if (/*highlight*/ ctx[2] === undefined && !("highlight" in props)) {
			console.warn("<List_item> was created without expected prop 'highlight'");
		}
	}

	get name() {
		throw new Error("<List_item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<List_item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get counter() {
		throw new Error("<List_item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set counter(value) {
		throw new Error("<List_item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get highlight() {
		throw new Error("<List_item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set highlight(value) {
		throw new Error("<List_item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/settings.svelte generated by Svelte v3.37.0 */

const { Object: Object_1$1, document: document_1 } = globals;
const file$2 = "src/components/settings.svelte";

function add_css$2() {
	var style = element("style");
	style.id = "svelte-1n6a4yn-style";
	style.textContent = "section.svelte-1n6a4yn.svelte-1n6a4yn{padding:5px}form.svelte-1n6a4yn.svelte-1n6a4yn{display:flex;margin-bottom:1em}form.svelte-1n6a4yn atom-text-editor.svelte-1n6a4yn{flex-grow:1}li.svelte-1n6a4yn.svelte-1n6a4yn{text-overflow:ellipsis;overflow:hidden}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc3ZlbHRlIiwibWFwcGluZ3MiOiJBQTRIdUIsT0FBQSw4QkFBQSxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbInNldHRpbmdzLnN2ZWx0ZSJdfQ== */";
	append_dev(document_1.head, style);
}

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	return child_ctx;
}

// (83:12) {#each Object.keys(services) as service}
function create_each_block_1(ctx) {
	let listitem;
	let current;

	listitem = new List_item({
			props: {
				name: /*services*/ ctx[0][/*service*/ ctx[11]].name,
				counter: /*services*/ ctx[0][/*service*/ ctx[11]].counter,
				highlight: true
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(listitem.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(listitem, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const listitem_changes = {};
			if (dirty & /*services*/ 1) listitem_changes.name = /*services*/ ctx[0][/*service*/ ctx[11]].name;
			if (dirty & /*services*/ 1) listitem_changes.counter = /*services*/ ctx[0][/*service*/ ctx[11]].counter;
			listitem.$set(listitem_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(listitem.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(listitem.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(listitem, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(83:12) {#each Object.keys(services) as service}",
		ctx
	});

	return block;
}

// (112:12) {#each customUrls as url}
function create_each_block$1(ctx) {
	let li;
	let button;
	let t0;
	let span;
	let t1_value = /*url*/ ctx[8] + "";
	let t1;
	let t2;
	let li_title_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			li = element("li");
			button = element("button");
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			t2 = space();
			attr_dev(button, "aria-label", "Remove URL from list");
			attr_dev(button, "class", "btn btn-xs icon icon-remove-close");
			add_location(button, file$2, 113, 16, 3068);
			attr_dev(span, "class", "text-info");
			add_location(span, file$2, 114, 16, 3199);
			attr_dev(li, "class", "list-item svelte-1n6a4yn");
			attr_dev(li, "title", li_title_value = /*url*/ ctx[8]);
			add_location(li, file$2, 112, 14, 3017);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, button);
			append_dev(li, t0);
			append_dev(li, span);
			append_dev(span, t1);
			append_dev(li, t2);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*removeUrl*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*customUrls*/ 2 && t1_value !== (t1_value = /*url*/ ctx[8] + "")) set_data_dev(t1, t1_value);

			if (dirty & /*customUrls*/ 2 && li_title_value !== (li_title_value = /*url*/ ctx[8])) {
				attr_dev(li, "title", li_title_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(112:12) {#each customUrls as url}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let section;
	let div3;
	let atom_panel0;
	let div2;
	let div0;
	let t1;
	let div1;
	let t2;
	let div7;
	let atom_panel1;
	let div6;
	let div4;
	let t4;
	let div5;
	let p;
	let t5;
	let code;
	let t7;
	let a;
	let t9;
	let t10;
	let form;
	let atom_text_editor;
	let t11;
	let button;
	let t12;
	let ul;
	let current;
	let mounted;
	let dispose;
	let each_value_1 = Object.keys(/*services*/ ctx[0]);
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks_1[i], 1, 1, () => {
		each_blocks_1[i] = null;
	});

	let each_value = /*customUrls*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			section = element("section");
			div3 = element("div");
			atom_panel0 = element("atom-panel");
			div2 = element("div");
			div0 = element("div");
			div0.textContent = "Blocked Connections";
			t1 = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = space();
			div7 = element("div");
			atom_panel1 = element("atom-panel");
			div6 = element("div");
			div4 = element("div");
			div4.textContent = "Custom URLs";
			t4 = space();
			div5 = element("div");
			p = element("p");
			t5 = text("Here you can add match patterns for URLs. These consist of three parts: scheme, host, and path. The scheme and host are separated by ");
			code = element("code");
			code.textContent = "://";
			t7 = text(".\n            See the ");
			a = element("a");
			a.textContent = "MDN documentation";
			t9 = text(" for details.");
			t10 = space();
			form = element("form");
			atom_text_editor = element("atom-text-editor");
			t11 = space();
			button = element("button");
			t12 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(div0, "class", "panel-heading");
			add_location(div0, file$2, 80, 10, 1624);
			attr_dev(div1, "class", "panel-body padded");
			add_location(div1, file$2, 81, 10, 1687);
			attr_dev(div2, "class", "inset-panel");
			add_location(div2, file$2, 79, 8, 1588);
			add_location(atom_panel0, file$2, 78, 6, 1567);
			attr_dev(div3, "class", "block");
			add_location(div3, file$2, 77, 2, 1541);
			attr_dev(div4, "class", "panel-heading");
			add_location(div4, file$2, 93, 8, 2043);
			add_location(code, file$2, 95, 146, 2274);
			attr_dev(a, "href", "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns");
			add_location(a, file$2, 96, 20, 2312);
			add_location(p, file$2, 95, 10, 2138);
			set_custom_element_data(atom_text_editor, "id", "url-input");
			set_custom_element_data(atom_text_editor, "class", "editor mini svelte-1n6a4yn");
			set_custom_element_data(atom_text_editor, "mini", "");
			set_custom_element_data(atom_text_editor, "data-grammar", "text plain null-grammar");
			set_custom_element_data(atom_text_editor, "placeholder", "<scheme>://<host>/<path>");
			add_location(atom_text_editor, file$2, 99, 12, 2517);
			attr_dev(button, "type", "submit");
			attr_dev(button, "aria-label", "Add URL to list");
			attr_dev(button, "class", "btn icon icon-gist-new");
			add_location(button, file$2, 107, 12, 2820);
			attr_dev(form, "class", "svelte-1n6a4yn");
			add_location(form, file$2, 98, 10, 2458);
			attr_dev(ul, "class", "list-group");
			add_location(ul, file$2, 110, 10, 2941);
			attr_dev(div5, "class", "panel-body padded");
			add_location(div5, file$2, 94, 8, 2096);
			attr_dev(div6, "class", "inset-panel");
			add_location(div6, file$2, 92, 6, 2009);
			add_location(atom_panel1, file$2, 91, 4, 1990);
			attr_dev(div7, "class", "block");
			add_location(div7, file$2, 90, 2, 1966);
			attr_dev(section, "class", "svelte-1n6a4yn");
			add_location(section, file$2, 76, 0, 1529);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div3);
			append_dev(div3, atom_panel0);
			append_dev(atom_panel0, div2);
			append_dev(div2, div0);
			append_dev(div2, t1);
			append_dev(div2, div1);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div1, null);
			}

			append_dev(section, t2);
			append_dev(section, div7);
			append_dev(div7, atom_panel1);
			append_dev(atom_panel1, div6);
			append_dev(div6, div4);
			append_dev(div6, t4);
			append_dev(div6, div5);
			append_dev(div5, p);
			append_dev(p, t5);
			append_dev(p, code);
			append_dev(p, t7);
			append_dev(p, a);
			append_dev(p, t9);
			append_dev(div5, t10);
			append_dev(div5, form);
			append_dev(form, atom_text_editor);
			append_dev(form, t11);
			append_dev(form, button);
			append_dev(div5, t12);
			append_dev(div5, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(atom_text_editor, "keyup", prevent_default(/*handleKeyup*/ ctx[3]), false, true, false),
					listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[2]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*services, Object*/ 1) {
				each_value_1 = Object.keys(/*services*/ ctx[0]);
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
						transition_in(each_blocks_1[i], 1);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						transition_in(each_blocks_1[i], 1);
						each_blocks_1[i].m(div1, null);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (dirty & /*customUrls, removeUrl*/ 18) {
				each_value = /*customUrls*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks_1[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks_1 = each_blocks_1.filter(Boolean);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				transition_out(each_blocks_1[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Settings", slots, []);
	let services;
	let customUrls;

	const unsubscribe = store.subscribe(value => {
		$$invalidate(0, services = value.services);
		$$invalidate(1, customUrls = value.customUrls);
	});

	function handleSubmit() {
		let editor = document.querySelector("#url-input .line .syntax--text");
		addUrl(editor.innerText);
	}

	function handleKeyup(event) {
		if (event.code == "Enter") {
			handleSubmit();
		}
	}

	function updateState(customUrls) {
		const previousCustomUrls = customUrls;

		store.update(state => {
			state.customUrls = customUrls;
			return state;
		});

		try {
			init();
		} catch(err) {
			store.update(state => {
				state.customUrls = previousCustomUrls;
				return state;
			});
		}

		persistState(customUrls);
	}

	function addUrl(value) {
		if (!value.trim().length || !isValidPattern(value)) return false;

		if (!customUrls.includes(value.trim())) {
			customUrls.push(value.trim());
			updateState(customUrls);
			return true;
		}

		return false;
	}

	function removeUrl(event) {
		const value = event.target.parentNode.innerText.trim();
		const index = customUrls.indexOf(value);
		if (index < 0) return;
		customUrls.splice(index, 1);
		updateState(customUrls);
	}

	onDestroy(unsubscribe);
	const writable_props = [];

	Object_1$1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Settings> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		isValidPattern,
		persistState,
		onDestroy,
		ListItem: List_item,
		store,
		updateFilter: init,
		services,
		customUrls,
		unsubscribe,
		handleSubmit,
		handleKeyup,
		updateState,
		addUrl,
		removeUrl
	});

	$$self.$inject_state = $$props => {
		if ("services" in $$props) $$invalidate(0, services = $$props.services);
		if ("customUrls" in $$props) $$invalidate(1, customUrls = $$props.customUrls);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [services, customUrls, handleSubmit, handleKeyup, removeUrl];
}

class Settings extends SvelteComponentDev {
	constructor(options) {
		super(options);
		if (!document_1.getElementById("svelte-1n6a4yn-style")) add_css$2();
		init$1(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Settings",
			options,
			id: create_fragment$2.name
		});
	}
}

var SettingsView = /** @class */ (function () {
    function SettingsView() {
        this.subscriptions = new atom$1.CompositeDisposable();
        this.init();
    }
    SettingsView.prototype.getTitle = function () {
        return 'Do Not Track';
    };
    SettingsView.prototype.getURI = function () {
        return 'atom://do-not-track/settings';
    };
    SettingsView.prototype.getDefaultLocation = function () {
        return String(getConfig('interfaceAlignment'));
    };
    SettingsView.prototype.getElement = function () {
        var element = document.createElement('do-not-track-settings');
        new Settings({
            target: element
        });
        return element;
    };
    SettingsView.prototype.getIconName = function () {
        return 'stop';
    };
    SettingsView.prototype.getDock = function () {
        return (getConfig('interfaceAlignment') === 'left'
            ? atom.workspace.getLeftDock()
            : atom.workspace.getRightDock());
    };
    SettingsView.prototype.init = function () {
        atom.workspace.open(this, {
            activatePane: false,
            activateItem: false
        });
    };
    SettingsView.prototype.show = function () {
        this.getDock().show();
    };
    SettingsView.prototype.hide = function () {
        this.getDock().hide();
    };
    SettingsView.prototype.toggle = function () {
        atom.workspace.toggle(this);
    };
    SettingsView.prototype.destroy = function () {
        if (this === null || this === void 0 ? void 0 : this.subscriptions)
            this.subscriptions.dispose();
    };
    return SettingsView;
}());

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function dispose() {
  if (typeof this.destroy === 'function') {
    this.destroy();
  } else if (typeof this.stop === 'function') {
    this.stop();
  } else if (typeof this.kill === 'function') {
    this.kill();
  } else if (typeof this.end === 'function') {
    this.end();
  } else {
    throw new Error('Unable to dispose object');
  }
}

function disposify(subject) {
  // $FlowIgnore: Flow is stupid
  if ((typeof subject === 'undefined' ? 'undefined' : _typeof(subject)) === 'object' && typeof subject.dispose !== 'function') {
    // $FlowIgnore: Flow is stupid
    Object.defineProperty(subject, 'dispose', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: dispose
    });
  }
  return subject;
}

var lib = disposify;

/* src/components/tooltip.svelte generated by Svelte v3.37.0 */

const { Object: Object_1 } = globals;
const file$1 = "src/components/tooltip.svelte";

function add_css$1() {
	var style = element("style");
	style.id = "svelte-1yn2hhz-style";
	style.textContent = "section.svelte-1yn2hhz{color:inherit}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5zdmVsdGUiLCJtYXBwaW5ncyI6IkFBdUJFLE9BQU8sZUFBQyxDQUFBLEFBQ04sS0FBSyxDQUFFLE9BQU8sQUFDaEIsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJ0b29sdGlwLnN2ZWx0ZSJdfQ== */";
	append_dev(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (17:4) {#each Object.keys(services) as service}
function create_each_block(ctx) {
	let listitem;
	let current;

	listitem = new List_item({
			props: {
				name: /*services*/ ctx[0][/*service*/ ctx[2]].shortName,
				counter: /*services*/ ctx[0][/*service*/ ctx[2]].counter
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(listitem.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(listitem, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const listitem_changes = {};
			if (dirty & /*services*/ 1) listitem_changes.name = /*services*/ ctx[0][/*service*/ ctx[2]].shortName;
			if (dirty & /*services*/ 1) listitem_changes.counter = /*services*/ ctx[0][/*service*/ ctx[2]].counter;
			listitem.$set(listitem_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(listitem.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(listitem.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(listitem, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(17:4) {#each Object.keys(services) as service}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let section;
	let p;
	let strong;
	let t1;
	let div;
	let current;
	let each_value = Object.keys(/*services*/ ctx[0]);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			section = element("section");
			p = element("p");
			strong = element("strong");
			strong.textContent = "Blocked Connections";
			t1 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			add_location(strong, file$1, 14, 5, 280);
			add_location(p, file$1, 14, 2, 277);
			attr_dev(div, "class", "list-group");
			add_location(div, file$1, 15, 2, 323);
			attr_dev(section, "class", "svelte-1yn2hhz");
			add_location(section, file$1, 13, 0, 265);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, p);
			append_dev(p, strong);
			append_dev(section, t1);
			append_dev(section, div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*services, Object*/ 1) {
				each_value = Object.keys(/*services*/ ctx[0]);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Tooltip", slots, []);
	let services;

	const unsubscribe = store.subscribe(value => {
		$$invalidate(0, services = value.services);
	});

	onDestroy(unsubscribe);
	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tooltip> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		onDestroy,
		store,
		ListItem: List_item,
		services,
		unsubscribe
	});

	$$self.$inject_state = $$props => {
		if ("services" in $$props) $$invalidate(0, services = $$props.services);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [services];
}

class Tooltip extends SvelteComponentDev {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1yn2hhz-style")) add_css$1();
		init$1(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tooltip",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/components/status-bar.svelte generated by Svelte v3.37.0 */
const file = "src/components/status-bar.svelte";

function add_css() {
	var style = element("style");
	style.id = "svelte-d30rb6-style";
	style.textContent = "button.svelte-d30rb6{background-color:inherit;border:none}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5zdmVsdGUiLCJtYXBwaW5ncyI6IkFBaUNHLE1BQU0sY0FBQyxDQUFBLEFBQ04sZ0JBQWdCLENBQUUsT0FBTyxDQUN6QixNQUFNLENBQUUsSUFBSSxBQUNkLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsic3RhdHVzLWJhci5zdmVsdGUiXX0= */";
	append_dev(document.head, style);
}

function create_fragment(ctx) {
	let button;
	let span;
	let t0;

	let t1_value = (/*alwaysShowCounter*/ ctx[2] && /*counter*/ ctx[1] !== 0
	? /*counter*/ ctx[1]
	: "") + "";

	let t1;
	let button_class_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			span = element("span");
			t0 = space();
			t1 = text(t1_value);
			attr_dev(span, "class", "icon icon-stop");
			add_location(span, file, 28, 2, 777);
			attr_dev(button, "class", button_class_value = "inline-block text-" + /*buttonClass*/ ctx[0] + " svelte-d30rb6");
			add_location(button, file, 27, 0, 703);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, span);
			append_dev(button, t0);
			append_dev(button, t1);

			if (!mounted) {
				dispose = listen_dev(button, "click", handleClick, false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*alwaysShowCounter, counter*/ 6 && t1_value !== (t1_value = (/*alwaysShowCounter*/ ctx[2] && /*counter*/ ctx[1] !== 0
			? /*counter*/ ctx[1]
			: "") + "")) set_data_dev(t1, t1_value);

			if (dirty & /*buttonClass*/ 1 && button_class_value !== (button_class_value = "inline-block text-" + /*buttonClass*/ ctx[0] + " svelte-d30rb6")) {
				attr_dev(button, "class", button_class_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function handleClick() {
	const activeEditor = atom.workspace.getActivePane();
	const activeView = atom.views.getView(activeEditor);
	atom.commands.dispatch(activeView, "do-not-track:toggle-settings");
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Status_bar", slots, []);
	let buttonClass;
	let counter;

	const unsubscribe = store.subscribe(value => {
		$$invalidate(0, buttonClass = value.buttonClass);
		$$invalidate(1, counter = value.counter);
	});

	let alwaysShowCounter = getConfig("alwaysShowCounter");

	atom.config.observe("do-not-track.alwaysShowCounter", isVisible => {
		$$invalidate(2, alwaysShowCounter = isVisible);
	});

	onDestroy(unsubscribe);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Status_bar> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		onDestroy,
		getConfig,
		store,
		handleClick,
		buttonClass,
		counter,
		unsubscribe,
		alwaysShowCounter
	});

	$$self.$inject_state = $$props => {
		if ("buttonClass" in $$props) $$invalidate(0, buttonClass = $$props.buttonClass);
		if ("counter" in $$props) $$invalidate(1, counter = $$props.counter);
		if ("alwaysShowCounter" in $$props) $$invalidate(2, alwaysShowCounter = $$props.alwaysShowCounter);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [buttonClass, counter, alwaysShowCounter];
}

class Status_bar extends SvelteComponentDev {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-d30rb6-style")) add_css();
		init$1(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Status_bar",
			options,
			id: create_fragment.name
		});
	}
}

var StatusBarView = /** @class */ (function () {
    function StatusBarView() {
        this.subscriptions = new atom$1.CompositeDisposable();
    }
    StatusBarView.prototype.attach = function (statusBar) {
        var position = (getConfig('interfaceAlignment') === 'left'
            ? 'addLeftTile'
            : 'addRightTile');
        this.subscriptions.add(lib(statusBar[position]({
            item: this.render(),
            priority: 100
        })));
    };
    StatusBarView.prototype.render = function () {
        var element = document.createElement('do-not-track-button');
        var tooltip = document.createElement('div');
        atom.tooltips.add(element, {
            item: tooltip
        });
        new Tooltip({
            target: tooltip
        });
        new Status_bar({
            target: element
        });
        return element;
    };
    return StatusBarView;
}());

var index = {
    config: configSchema,
    subscriptions: null,
    settings: null,
    statusbar: null,
    activate: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                init();
                this.settings = new SettingsView();
                this.statusbar = new StatusBarView();
                // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
                this.subscriptions = new atom$1.CompositeDisposable();
                // Register commands
                this.subscriptions.add(atom.commands.add('atom-workspace', {
                    'do-not-track:toggle-settings': function () {
                        _this.settings.toggle();
                    }
                }));
                return [2 /*return*/];
            });
        });
    },
    deactivate: function () {
        var _a;
        (_a = this.subscriptions) === null || _a === void 0 ? void 0 : _a.dispose();
        this.settings.destroy();
    },
    consumeStatusBar: function (statusBar) {
        this.statusbar.attach(statusBar);
    }
};

module.exports = index;
//# sourceMappingURL=do-not-track.js.map
