## How to See the Project Running:

deployed at: tander29.github.io/bookbuddies
To run locally : Clone this repo, the back-end repo, and follow the instructions in the back-end repo to create a local database found at github.com/tander29/bookbuddy-api. Prior knowledge with npm/yarn, env variables, node, and create-react-app needed.

Routing info for running locally-look at paths in the index.js. In the root/src/redux/types.jsx, assure the variable assignment on "heroku" to equal "local". Will have to navigate to localhost:8000:/bookbuddies. See more info on pathing or change paths in the root/index.js
for info on create-react-app, see the Creat-React-App-README.MD

## About this Project/Purpose and How to Interpret:

Look at this project from a students point of view. We wanted everyone in our group to learn as much as possible, and be involved as everywhere they could in this project as possible.

This repo contains front-end portion of a full stack project. The backend repo can be found in my other repo: github.com/tander29/bookbuddy-api.

The objective of this project was to, with a group of our peers, create a **MVP** of a full stack website using **React/Redux**, and **Node.JS / Express** back-end, with a database written in our choice of code, this project used a **SQL / Sequelize** based database hosted on heroku. Design done with **semantic - ui**.

The idea of this website, a book sharing platform called we called "BookBuddies" was developed by one of our group members. Where users can create a community to share books with others.

## Features to note for this project:

- User's can direct message other users with an inbox/outbox system.
- Users can register, login, and can't navigate the site until logged in.
- User's can post new books, for others to see, manually.
- User's can post new books easily, by using the google books API.
- User's can search for books on the website to see what has been posted.
- Error and authorization handling for failed registration, or attempting to go to site extensions that don't exist.

## File structure

**Built with create-react-app:**

public folder contains base index.html, the favicon, and manifest.json

**src**

- Components folder: contains all components, those that can be individual components are, components that host others, i.e a homepage, is built taking in other components.

- images folder: custom made icons, pictures, backgrounds. Note: Does not contain images of book-covers, those are url's provided by Google Books API.

- Redux Folder: Composed of all items needed for creating a Redux store. Actions folder contains compartmentalization for different actions. Reducers.jsx hosts all reducer functions. Store.jsx host boiler plate for middleware(router/thunk). Compose enhancer line allows to use browser dev-tools for redux debugging. Types.jsx contains common variables used across redux location, also includes the 'switch' to run project locally, or run based on an external source.

- App.css: Contains some styling, however is not a master css controller, many components include inline styling.

- App.js: As students we kept to demonstrate the boiler plate as reference. However the index.js is the finished version:

- Index.js: Where the app is running through: includes switch/router, redux store/provider initiation, implement main pages

## Group Members:

Travis Anderson / github: tander29 (current repo)
Patrick H.
David S.
Kyle M.
Adrian P.
