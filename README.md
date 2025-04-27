# do-not-track

[![License](https://img.shields.io/github/license/idleberg/atom-do-not-track?color=blue&style=for-the-badge)](https://github.com/idleberg/atom-do-not-track/blob/master/LICENSE)
[![Release](https://img.shields.io/github/v/release/idleberg/atom-do-not-track?style=for-the-badge)](https://github.com/idleberg/atom-do-not-track/releases)
[![Downloads](https://img.shields.io/pulsar/dt/do-not-track?style=for-the-badge&color=slateblue)](https://web.pulsar-edit.dev/packages/do-not-track)
[![CI](https://img.shields.io/github/actions/workflow/status/idleberg/atom-do-not-track/default.yml?style=for-the-badge)](https://github.com/idleberg/atom-do-not-track/actions)

# Description

A package to block web-requests to tracking-servers

## Installation

### Package Manager

Install `language-nsis` from the editor's [Package Manager](http://flight-manual.pulsar-editor.cc/using-atom/sections/atom-packages/) or the command-line equivalent:

```bash
$ ppm install do-not-track`
````

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.pulsar\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.pulsar\packages
```

**Linux & macOS**

```bash
$ cd ~/.pulsar/packages/
```

Clone the repository as `do-not-track`:

```bash
$ git clone https://github.com/idleberg/atom-do-not-track do-not-track
```

Install dependencies:

```bash
$ cd do-not-track && npm install && npm run build
```

## Usage

By default, this package blocks requests for Atom Metrics, Google Analytics, Google Tag Manager and Matomo/Piwik and others. This behaviour can be changed in the package settings.

Additionally, you can block custom URL patterns in the packages settings pane. You can open it by clicking on the Do Not Track status-bar or by running *Do Not Track: Toggle Settings* from your command palette.

**Note:** Only web-requests that run within Atom's main process can be blocked. Parts of Atom, as well as some third-party packages, use external processes to establish connections – these cannot be blocked by this package. Examples for this behaviours are `apm`, the TabNine package, and *potentially* all packages using the Language Server Protocol (LSP).

## License

This work is licensed under the [MIT License](LICENSE)
