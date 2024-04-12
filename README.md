## Rumor - React Demo App

Initial project setup for react project using vite package plugin to create faster builds and easier development. It includes all the typescript rules in tsconfig.json and all ecmascript/javascript standards are enforced using eslint rules from .eslintrc. To make sure all best practises are followed husky hooks are used which runs before every commit is pushed by developer.

#### [Demo Video](https://vimeo.com/933658525/5c4c11fdfc?share=copy)

### Technologies
- React Js (18.2.0)
- Typscript (5.2.2)

### Prerequisites
- Download node version [20.10.0](https://nodejs.org/en/blog/release/v20.10.0) [React and Vite]

### Setup steps
- Install node js 20.10.0
- Install yarn version 1.22.21 using command 
   ```bash
   $ npm i -g yarn@1.22.21
   ```
- Go to project root directory and run 
   ```bash
   $ yarn install
   ```
- After successful installation run 
   ```bash
   $ yarn run dev
   ```
- This should run your project locally on port 5173: http://localhost:5173

### Test Task Description:

- Implemented Dashboard and Team UI page 
- Handled routing using react router dom 
- Added responsive sidebar component and navigation triggers on element click
- Added routes and child route setup so that all the child routes are shown on right and sidebar stays as is
- For api calls mock api is used and api url is https://661643a0b8b8e32ffc7ce2ea.mockapi.io/api/v1
- Teams data is on https://661643a0b8b8e32ffc7ce2ea.mockapi.io/api/v1/team and events api is on https://661643a0b8b8e32ffc7ce2ea.mockapi.io/api/v1/events
- For api integration and state management RTK query is used with redux toolkit
- Data refectch, mutation, avoid redundant api call is handled via RTK query slice 
- Dashboard page has dynamic data for upcoming events and attendees from mock api https://661643a0b8b8e32ffc7ce2ea.mockapi.io/api/v1/events and rest of the data is static
- UI is responsive across devices 
- Teams page loads data dynamically in batch and data load on scroll using infinite scroll
- Search filter by name works seemlessly and loads searched results in UI
- Search and paginations work well in sync and search results also load in batches and it fetch next batch data if present on scroll


### Third party libraries:

- **Redux toolkit:** State management library used to manage state for api data
- **RTK Query:** RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic you
- **Tailwind css:** Tailwind CSS is used for implementing various complex UI in a very developer friendly manner. It is quick to implement and easy to manage utility
- **React infinite scroll:** A component to make all your infinite scrolling woes go away with just 4.15 kB! Pull Down to Refresh feature added. An infinite-scroll that actually works and super-simple to integrate.
- **React router dom:** The react-router-dom package contains bindings for using React Router in web applications.
- **Typescript:** TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

Note:

Fonts are a bit different than the figma since we weren't able to find the exact fonts on google cdn or via local file. So we have used a close match i.e Roboto, once we get zip file for fonts we can check it out