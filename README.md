# React TS Starter

Based on [MS React TS Starter](https://github.com/Microsoft/TypeScript-React-Starter)

## Install

```bash
git clone git@github.com:commite/react-ts-boilerplate.git
yarn install
```

## Content

* [Typescript](#typescript)
* [React Router](#react-router)
* [Redux Store](#redux-store)
* [Environments](#environments)
* [RxJS Http Client](#http-client) (wrapper for [Rxios](https://github.com/davguij/rxios))
* [Backendless mock](#mock)
* [Styled Components](#styled-components)
* [Storybook](#storybook)
* [HMR](#hmr)
* [Project Structure](#project-structure)
* [Unit testing](#unit-testing) ([Jest](https://facebook.github.io/jest/)+[Enzyme](https://github.com/airbnb/enzyme))
* [E2E testing](#e2e-testing) ([Cypress](https://www.cypress.io/))

## Typescript

All the starter is ready to use typescript, only a few configuration files must be native JS, in all the other cases they must be `.ts` or `.tsx` if contains react template syntax.

## React router

Main section routes are defined in `src/root-app.tsx` file.

## Redux store

The starter app is provided with a combining reducers store, all the store needed files are in `src/store`, for actions and reducers constructions [redux-act](https://github.com/pauldijou/redux-act) it's used.

Remember add new reducers to `src/store/app-state.ts` reducers dictionary for being added to the global store.

Redux Dev Tools is activated when `devTools` environment option equals `true` (only on `default` and `staging` environments now);

## Environments

There are new scripts on `package.json` to manage differents environments, new environments can be added but, at this time, are `default`, `staging` and `production`.

Only append `:[environment]` to `start` and `build` command to change environment i.e.:

```bash
#Build app with production environment values
yarn build:production
```

Not appending anything to the command loads `default` environment values.

All environment files are in `src/environment`, to create new environments use `environment-[environmentName].ts` filename, add to `package.json` the new scripts following the existing scripts and modify the `src/environment/environment.ts` file to import and return the new environment.

To add new environment values modify the environment model in `src/models/misc/environment.ts` and set the new values on all the environments.

## Http client

Http client service (`src/services/http-client/http-client.service.ts`) must be used for all needed requests, its manage all mock logic and, later on, middlewares/injectors. It's a wrapper of [Rxios](https://github.com/davguij/rxios) and all request are managed as RxJS Observable flows.

## Mock

When `mock` environment value equals true (only on `default` environment now) all requests are redirected to `src/services/mock/mock.service.ts`, how to manage them depends on you but current service have a little example.

## Styled Components

For styling can use [Styled Components](https://www.styled-components.com/) or native css.

## Storybook

For UI Development [Storybook](https://storybook.js.org/) is used, by default all `*.story.tsx` files of `src/features` folder and subfolders are added to global stories.

## HMR

Hot-module-reloading is active in all the app.

## Project Structure

Here is the basic suggested skeleton for the app:

```text
├/public (public resources/assets)
│
├/e2e (cypress e2e testing)
│
├/.storybook (storybook config files)
│
└/src
  ├index.tsx (main render)
  │
  ├app-root.tsx (Main router switch and provider population)
  │
  ├/environment (environments variables)
  │
  ├/models (classes and interfaces definitions)
  │
  ├/services (services that can be used for any component)
  │
  ├/store (store, actions and reducers)
  │
  └/features (all components)
      │
      └/login (one folder per section/feature)
        │
        ├/login-form (one per stateless component)
        │  │
        │  ├login-form.story.tsx (story file if needed)
        │  │
        │  ├login-form.styled.ts (styled components if needed)
        │  │
        │  ├login-form.test.ts (unit tests)
        │  │
        │  └login-form.tsx (component)
        │
        └/login-section (one '*-section' component per section)
            │
            ├login-section.story.tsx (story file if needed)
            │
            ├login-section.styled.ts (styled components if needed)
            │
            ├login-section.test.ts (unit tests)
            │
            └login-section.tsx (component)
```

## Unit testing

For unit testing [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) are used, both are ready for TS syntax and typings, all `*.test.ts` files from `features` folder and subfolders will be tested with:

```bash
yarn test
```

## E2E testing

For e2e testing [Cypress](https://www.cypress.io/) is used, is ready for TS syntax and typings, all e2e test and configs are in `e2e` folder.

```bash
# For testing with UI
yarn cypress:open
# For console testing (a video is recorded for each test)
yarn cypress:run
```