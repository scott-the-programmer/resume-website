# scott-the-programmer

![Continuous Deployment](https://github.com/scott-the-programmer/scott-the-programmer.github.io/workflows/continuous-deployment/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/7a79085c05a7ce7ea5e3/maintainability)](https://codeclimate.com/github/scott-the-programmer/scott-the-programmer.github.io/maintainability)

This project contains the source files for [scott-the-programmer.com](https://scott-the-programmer.com)

Currently, this is written in [React](https://reactjs.org/)

## Prerequisites

* [Node 13.12.0+](https://nodejs.org/en/download/)
* [Npm 6.14.4+](https://www.npmjs.com/get-npm)

## Getting started

### Install dependencies

Run the following command to install the required dependencies

```bash
npm install
```

### Run website locally

Run the following to serve the content locally

```bash
npm run start
```

The website will be run on [localhost:3000](localhost:3000)

### Run tests

Tests are localled under [./src/\_\_tests\_\_](./src/__tests__)

To run all the unit tests, run the following command

```bash
npm run test
```

### Run deployment

If you are a contributor of this repository, your git credentials will be allowed to deploy this application to github pages

To deploy the website, run the following command

```bash
npm run deploy
```

## Continuous Deployment

This repository is hooked up to [Github Actions](https://github.com/features/actions). Every push to the development branch will trigger a build / test. If those stages are successful, the artefacts
will be automatically deployed to [https://scott-the-programmer.com](https://scott-the-programmer.com)
