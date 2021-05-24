# Release bot [![Build Status](https://travis-ci.com/salarhfz-fs/release-bot.svg?branch=master)](https://travis-ci.com/salarhfz-fs/release-bot)

Release bot is basically a CLI tool that accepts commands from Slack and sends them to Release manager to be carried out.

# Table of contents

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
  - [Local development](#local-development)
  - [Docker development](#docker-development)
- [Project structure](#project-structure)
- [CI](#ci)
- [Deployment](#deployment)
- [NPM commands](#npm-commands)

# Pre-reqs
To start working, you can either directly install tools on your local development environment or use Docker instead.
1. For local development, install [Node.js](https://github.com/nvm-sh/nvm)
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# Source profile
. ~/.bash_profile || . ~/.bashrc
# Check available versions
nvm ls-remote
# Install latest LTS version
nvm install v14.17.0
# Check your installation
node -v
npm -v
```
2. To develop with Docker, install [Docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/)

# Getting started
## Local development
1. Clone the repository
```
git clone <project_name>
```
2. Install dependencies
```bash
cd <project_name>
npm ci
```
3. Create `development.env` and fill it with required variables to start the app
4. Run one of the available scripts from `package.json`

**Debug mode**
```bash
npm run watch-debug # Start in debug mode so you can attach a debugger
```
**Normal development mode**
```bash
# TypeScript compiler (tsc) will re-compile on any changes to src directory, then nodemon restarts the app
npm run watch
```
**Run test suite**
```
npm run watch-test
```

## Docker development
1. Clone the repository
```
git clone <project_name>
```
2. Install dependencies
```bash
cd <project_name>
npm ci
```
3. Create `development.env` and fill it with required variables to start the app
4. Prepare file permissions
```bash
chmod 755 scripts/*
sudo ./scripts/prepare_docker_dev.sh $USER $(id -g -n)
# Reload group settings or relogin to system to apply the new group
su - $USER
# Check if you've got the new group 'docker_dev_grp'
id

```
5. Use `docker_dev.sh watch` with a running mode. Modes are identical to the available npm commands in *package.json*

Debug mode
```bash
# Start in debug mode so you can attach a debugger
# When running on this mode, app starts but waits for you to attach a debugger. Then you can add breakpoints.
./scripts/docker_dev.sh watch-debug
```
Normal development mode
```bash
# TypeScript compiler (tsc) will re-compile on any changes to src directory, then nodemon restarts the app
./scripts/docker_dev.sh watch
```
Run test suite
```bash
# TypeScript compiler (tsc) will re-compile on any changes to test directory, then jest re-runs all the tests
./scripts/docker_dev.sh watch-test
```
> **Note.** - When you're done, you can use `Ctrl+C` to stop the container. Next time you run run `docker_dev.sh` the image won't be created and will be re-used in other running modes.

# Project structure
The full directory structure is explained below:

> **Note!** You may need to run `npm run build`, `npm run test` and `npm run docs` to see all the directories.

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.husky**               | Contains Husky specific settings                                                              |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **coverage**             | Contains code coverage and test output                                                        |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **logs**                 | Contains centralized logs. You see this if ptoject is configured to write logs to file system |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **scripts**              | Contains configuration and runner shell/bash scripts                                          |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/util**             | Contains all the project-wide utility functions and classes                                   |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped.                                               |
| **src**/index.ts         | Entry point to the app                                                                        |
| **test**                 | Contains your tests. Separate from source because there is a different build process.         |
| .dockerignore            | Config settings for paths to exclude from docker images                                       |
| .eslintignore            | Config settings for paths to exclude from linting                                             |
| .eslintrc                | Config settings for ESLint code style checking                                                |
| .gitignore               | Config settings for paths to exclude from git                                                 |
| .prettierignore          | Config settings for excluding rules during prettier run                                       |
| .prettierrc.json         | Config settings for rules applied during prettier run                                         |
| .travis.yml              | Used to configure Travis CI build                                                             |
| development.env          | API keys, tokens, passwords, database URI. Clone this, but don't check it in to public repos  |
| jest.config.js           | Used to configure Jest running tests written in TypeScript                                    |
| package-lock.json        | Lock file for npm dependencies                                                                |
| package.json             | File that contains npm dependencies as well as other configurations                           |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| typedoc.json             | Config settings used during generating inline documentations from source code                 |

# NPM commands
| Npm Script | Description  |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `build-ts`                | Compiles all source `.ts` files to `.js` files in the `dist` folder                               |
| `build`                   | Full build. Runs ALL build tasks (`format` and `build-ts`)                                        |
| `clean`                   | Removes generated directories/files (coverage, dist, docs, logs)                                  |
| `cm`                      | Short for commit. Allows adding git commits based on a pre-defined template                       |
| `docs`                    | Generate docs from inline comments                                                                |
| `format-fix`              | Check for code format and automatically fix issues                                                |
| `format`                  | Runs ESLint and Prettier on project files, in just-check mode                                     |
| `lint-fix`                | Run ESLint and automatically fix linting issues                                                   |
| `lint`                    | Run ESLint in just-check mode                                                                     |
| `prettier-fix`            | Run Prettier and automatically fix code-styling issues                                            |
| `prettier`                | Run Prettier in just-check mode                                                                   |
| `start-debug`             | Start debugger on compiled code                                                                   |
| `start`                   | Start running compiled code                                                                       |
| `test`                    | Run tests using Jest test runner and produce code coverage                                        |
| `watch-debug`             | Start debugger in watch-mode                                                                      |
| `watch-node`              | Start running compiled code in watch-mode                                                         |
| `watch-test`              | Run test suite in watch-mode                                                                      |
| `watch-ts`                | Compile source code in watch-mode                                                                 |
| `watch`                   | Start running on watch-mode                                                                       |
| `prepare`                 | Prepare Husky to configure Git hooks                                                              |

