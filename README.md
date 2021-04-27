# do-not-track

[![apm](https://flat.badgen.net/apm/license/do-not-track)](https://atom.io/packages/do-not-track)
[![apm](https://flat.badgen.net/apm/v/do-not-track)](https://atom.io/packages/do-not-track)
[![apm](https://flat.badgen.net/apm/dl/do-not-track)](https://atom.io/packages/do-not-track)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-do-not-track)](https://circleci.com/gh/idleberg/atom-do-not-track)
[![David](https://flat.badgen.net/david/dep/idleberg/atom-do-not-track)](https://david-dm.org/idleberg/atom-do-not-track)


# Description

A package to block web-requests to tracking-servers

## Installation

### apm

Install `do-not-track` from Atom [install view](atom://settings-view/show-package?package=do-not-track) or use the command-line equivalent:

`$ apm install do-not-track`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone the repository as `do-not-track`:

```bash
$ git clone https://github.com/idleberg/atom-do-not-track do-not-track
```

Install dependencies:

```bash
cd do-not-track && npm install
```

## Usage

By default, this package blocks requests for Atom Metrics, Google Analytics, Google Tag Manager and Matomo/Piwik. This behaviour can be changed in the package settings.

Additionally, you can block custom URL patterns in the packages settings pane. You can open it by clicking on the Do Not Track status-bar or by running *Do Not Track: Toggle Settings* from your command palette.

**Note:** Only web-requests that run within Atom's main process can be blocked. Parts of Atom, as well as some third-party packages, use external processes to establish connections – these cannot be blocked by this package. Examples for this behaviours are `apm`, the TabNine package, and *potentially* all packages using the Language Server Protocol (LSP).

## License

This work is licensed under the [MIT License](LICENSE)
