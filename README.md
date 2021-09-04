## readme.md project 2 file:

## Explanations of the technologies used:

- bulma for styling (sass)
- axios to access News API
- aztro-js to access horoscope API (API wrapper)
- React
- Horoscope API
- https://aztro.readthedocs.io/en/latest/
- https://github.com/sameerkumar18/aztro
- News API
- https://rapidapi.com/contextualwebsearch/api/web-search/details

---

## General approach:

Already had an API to use (horoscope) discussed how we could use it with added feature of a second API
Set up git repo, notified each other of when pushes were made
Built the basic structure together using <p></p> to return hard coded information on pages to check if they worked using live code share
Divided the work and what components we would work on. In class time disscussed what was done and what needed to be done
When a problem occured - shared it - solved it
When we changed or did something significant would share and explain what we did to each other
A new feture we used was storing data onto the local storage so that it could be used on another component by the APIs ( first have to convert the JavaScript object or value to a JSON string then you can store it)
Stored:

- Value of buttons from HoroscopeIndex.js
- User info data from UserInfo.js
- The response from the horoscope API so that it could be used by the news API

---

## Installation instructions for any dependencies:

- create an account on rapidapi.com to get api key for the web search

All in terminal when cd is project-2-api:

- yarn install
- bulma - yarn add bulma
- axios - yarn add axios
- aztro-js - yarn add aztro-js

---

## Link to your wireframes – sketches of major views / interfaces in your application:

Image attached (Wireframe.jpg)

---

## Descriptions of any unsolved problems or major hurdles your team had to overcome:

- Main struggle was calling the APIs to the page (Note/kim - i noticed that i wasn't reading the documentation properly/had difficulty interpretating it)
- Took a while to figure out how to store data to local storage
- Styling in general was quite tricky with multiple elements (HoroscopeIndex.js)
- News API - because we used the documentation to pull the data over it kept sending out multipe requests and we were unsure on how to rearange it so that it would only make one request. Wrapped it in a useEffect to sole
- Accessing and presenting the data from the news API
- Finding a usable API for new searches

---

## future work

- Horoscope API had links for yesterday and tomorrow readings
- Make code more DRY (HoroscopeDaily.js and HoroscopeCard.js basically using many of the same functions)
- A warning or error message when user does not fill out UserInfo.js
- More calls to API to find information based on the horoscope. EG gigs in your area if location is stored. Then further API calls based on those. eg return for gigs in your area then provides artists to search for spotify / youtube etc
