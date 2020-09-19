# Weather App
![weather app logo](https://github.com/praneybehl/weather-app/raw/master/public/images/weather_app_logo.png)
[![Netlify Status](https://api.netlify.com/api/v1/badges/13f89cf1-2358-4604-9638-ca3765fa480c/deploy-status)](https://app.netlify.com/sites/weather-app-vic/deploys)


## Table of Contents

* [Description](#user-content-description)
* [Deployment Site](#user-content-static-build-site)
* [Tech Used](#user-content-tech-used)
* [Testing](#user-content-testing)
* [Interface Design](#user-interface-design)
* [Installation and Prerequisites](#user-content-installation-and-prerequisites)
* [Getting Started](#user-content-getting-started)
* [Directory Structure](#user-content-directory-structure)
* [Version Control](#user-content-version-control)
* [NPM scripts dictionary ](#user-content-npm-scripts-dictionary)


## Description
Weather app displays the current weather conditions of Australia’s major capital cities. 
The weather data is retrieved from the [OpenWeather](https://openweathermap.org/current) API.

This application showcases:

- Minimalistic, Clean and Intuitive design with an strong focus on accessibility and good color contrast ratio.

- It follows **Best coding standards**, strict code organisation practices to improve **Maintainability**

- Global state management and caching API calls for **Performance**, and **Scalability**.

- Styling using [styled-components](https://styled-components.com/) & design-system using [styled-system](https://styled-system.com/) for Responsive user interface 

- **Code splitting** and Dynamic loading based on page routes bundled into individual javascript chunk files to **Speed up initial load times** and improve **Performance** by building smaller bundle files sizes. 

- Use of Typescript for strong & static type checking, unit tests, es-lint, prettier and git-commit hook with [Husky](https://github.com/typicode/husky) 
for delivering **Consistency** and **Reliability**.

- Conventional-Commit messages to improve **Readability** of commit message and **Automatic Changelogs Generation** for semantic versioning and Release notes. See **CHANGELOG.md** for sample.

- **Continuous Integration and Deployment** using Netlify.

## Deployment Site
The production deployment and Continuous Delivery is setup with Netlify.com.

The live project site can be found at: [`https://weather-app-vic.netlify.app`](https://weather-app-vic.netlify.app).  
For branch based build previews follow the link above in the `nelify` build badge.

## Tech used
This project mainly relies on the following libraries:  
Typescript, React, React-Hooks & React-Query(for state management), Styled-components & Styled-system(for React styling), 
Axios, create-react-app, Eslint, Prettier, Git-hooks with Husky and Lint-staged.


## Testing
For testing, this project is setup with the following testing tools and libraries:

`Unit tests: jest and @testing-library/react`

## Interface Design
The application has two page types:

### 1. Home Page - displays current weather information for major Autralian Capital cities:
![Home Page Screenshot](https://github.com/praneybehl/weather-app/raw/master/weather-app-vic-home-page-mockup.png)

### 2. City Page - displays weather conditions and details for the selected city:
![City Weather Detail Page Screenshot](https://github.com/praneybehl/weather-app/blob/master/weather-app-vic-city-detail-page-mockup.png)
 

## Installation and Prerequisites

### Node.js

Install [Node.js](https://nodejs.org/en/download/). And use the latest version of NodeJS (>= v10 preferred).

### Yarn
Yarn is used of the development of this project, alternatively `npm` can be used which is installed along with Node.js.
Note: If you decide to you `npm` instead, just replace `yarn` with `npm run` in the below commands;


Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Getting started

1. Clone this repo 
```bash
$ git clone https://github.com/praneybehl/weather-app
$ cd weather-app
```

2. Important! Setup environment variables.
```bash
 - Create a copy of the file '.env-sample' and name it '.env' in the same directory.
 - Replace the content <REPLACE_THIS_WITH_YOUR_OPEN_WEATHER_API_KEY> with your OpenWeather API Key or check email for a sample key provided.
```

3. NPM scripts dictionary Install Dependencies
```bash
$ yarn
or if using npm:
$ npm install
```

4. Build the project and start local development server.
```bash
$ yarn start
or if using npm:
$ npm run start
```
The development server can be accessed at http://localhost:3000

5. Build the project for production.
```bash
$ yarn build
or if using npm:
$ npm run build
```

6. Run Unit tests.
```bash
$ yarn test
or if using npm:
$ npm run test
```


## Directory Structure

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The the structure of the project is set to follow the hierarchy:

`app <- pages <- blocks  <- components`.

The project doesn't make use of any css frameworks, just the simple resets.
The rest of the folders and files only exist to make your life easier, and should not need to be changed.

Below you can find full details about significant files and folders.

```bass
.
├── public                                            // All public static assets go here.
├── src                                               // All source code go here.
│   ├── __mocks__                               // Jest mocks
│   ├── api                                     // Api integration
│   │   ├── __tests__                     // API tests
│   │   ├── index.tsx                     // API custom react-hooks, methods and state management
│   │   └── types.ts                      // Types for api methods 
│   ├── blocks                                  // All blocks are here
│   │   └── Header                        // Block directory
│   │       ├── Header.spec.tsx           // Block specs and tests
│   │       ├── index.tsx                 // Block component
│   │       └── styles.tsx                // Block styles and styled-components
│   ├── components                              // All components live here
│   │   ├── Container                     // Component directory
│   │   │   ├── index.tsx           // Component logic and exports
│   │   │   └── styles.tsx          // Component styles and styled-components
│   ├── constants                               // All app constants can be found here
│   ├── layouts                                 // Reusage layout templates are here
│   ├── pages                                   // All pages live here
│   │   └── Home                          // Page directory
│   │       ├── index.tsx                 // Page component definition
│   │       └── styles.tsx                // Page styles
│   ├── routes                                  // Apllication routes
│   ├── theme                                   // Application theme and design system lives here
│   │   ├── global.ts                     // Global css styles and resets
│   │   └── index.ts                      // App default theme 
│   ├── typings                                 // Global typescript type definitions
│   └── utils                                   // Resuable methods and utility functions 
│       ├── __tests__                           // Tests for common utils
│       ├── index.ts                            // Common utility methods
│       └── test-utils.js                       // Jest and react-testing library setup and utilities
│   ├── App.tsx                                 // Appilcation component
│   ├── index.tsx                               // main entry file
│   ├── setupTests.ts                           // Jest testing setup config
├── .editorconfig                                   // Editor configuration
├── .env-sample                                     // Environment variables
├── .eslintignore                                   // Ignored eslint files and folders
├── .eslintrc.json                                  // Eslint config
├── react-app-env.d.ts                              
├── tsconfig.json                                   // Typescript config
└── yarn.lock

```

## Version Control
This project is git version control along with [Conventional Commits](https://www.conventionalcommits.org/) 
specification for adding human and machine readable meaning to commit messages and .


## NPM scripts dictionary

`yarn start`:			Start local development server.  
`yarn build`:			Creates a production build.   
`yarn test`:			Runs unit tests.  
`yarn type-check`:		Runs typescript type checking.  
`yarn test-all`:		Runs linting, type checks and unit tests.  
`yarn lint`:	        Runs eslint.   
`yarn format`:		    Runs Prettier in 'write' mode to fix code styling.  
`yarn release`:		    Runs standard-version to bump version, and generate changelogs.  

