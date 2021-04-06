# Aircraft Scheduling POC
Hamed "Henry" Peikari - @2021
Senior React-Redux engineer, Tech Team Leas, UI Architect

![Image of Yaktocat](https://raw.githubusercontent.com/hpeikari/aircraft/develop/src/assets/img/screenshot.PNG)

### Tools
I used the latest version of dependencies in my project. Highlights:
- ReactJS v17 , frontend library to develop the view
- Redux v4 , state management
- Redux-Thunk v2 , middleware to support Redux
- Babel v7 , support for ES6 (ECMA 2020)
- Reselect v4, optimization tool to memoize heavy calculations from Redux
- i18next v19 , support for internationaliation
- Jest and Enzyme , unit testing
- Linters and Prettier , support for coding style guidelines and standards
- husky v4, support for git hooks for some automation
- Webpack v5 , code bundler

Others worth mentioning: routers, postCSS, SASS, CSS-Module, Axios, various asset loaders

### Installation

```none
> npm install
```

### Start Application

```none
> npm start
```
Open [http://localhost:5500](http://localhost:5500) in your web browser

### Run linters

```none
> npm run-script lint:js
> npm run-script lint:css
```

### Run Tests

```none
> npm test
```

### Notes:
I followed Functional Programming Paradigm with ES6. The code is clean, maintainable and scalable.
I followed Atomic Design Pattern and created small reusable stateless components and used them to build my view. Multiple views/features can be built with these reusable atomic components.
The app supports US-EN language. It can also very easily support other languages on demand.
While the UI is responsive, I did not spend much time to support mobile-size screens.

### Assumptions
- I assumed there is a microservice ("airline") with 4 endpoints that I could use to fetch data. The app can connect to multiple micro-services.
- `Date` object was not provided with the 'flights' payload, so I decided to map the `index` from DatePicker to the items in the data array.
- I did not utilize the "limit" and "offset" query params in fetching data and limitted the number of flights the user can fetch and see for rotations.
- You can only look at the schedules for today or the next "N" days. Where N is the number of rotation groups dynamically calculated from first page of data.
- I was not sure what the percentage value on "Aircraft" tile was about. Was it the total scheduled timeline for a specific day? If yes, I implemented that as part of my "TimeLine" component at the bottom of the screen where I thought makes more sense to display that info. In a real world situation, I would contact the designers and other stake holders to find out more information about it.
- I was not sure about the user interactions and workflow around editing the schedule as per the instructions given in this assignement. They were not very clear to me. In a real-life scenario, I would start conversations with the stake holders to gather more information regarding the requirements and understand the project better. Based on my limited understanding so far, I would assume a drag-n-drop library would be needed to drag Flight tiles from "Rotation" section and drop in "Flights" section? Then maybe provide the ability to drag and re-order the flights? Finally save the changes to the server. Since the app I have built so far has sufficiently show-cased my React-Redux skills, and the instructions regarding the editing feature were not very clear, I decided to submit the project at this point.
- Data cleaning and optimization should happen on the server. Ideally, frontend should just receive the data that needs to be rendered. Data transformation is very costly on the UI.
