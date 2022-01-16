# Project Two - React App Using Public APIs

A pair project over 2 weeks to build a React application that uses two public APIs (Horoscope and News).

[Click for Horoscope Site](https://sei-horoscope.netlify.app/)

<img width="1364" alt="Screenshot 2022-01-16 at 16 56 56" src="https://user-images.githubusercontent.com/85836801/149669758-4053fe6d-b089-412c-850d-288b190b5444.png">

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Dependencies](#dependencies)
- [Process](#process)
- [Wireframe](#wireframe)
- [Challenges](#challenges)
- [Wins](#wins)
- [Future](#future)

## Technologies

Project is created with:

- bulma for styling (sass)
- axios to access News API
- aztro-js to access horoscope API (API wrapper)
- React
- Horoscope API
- https://aztro.readthedocs.io/en/latest/
- https://github.com/sameerkumar18/aztro
- News API
- https://rapidapi.com/contextualwebsearch/api/web-search/details
- Netlify

## Setup

- Access the source code via the 'Clone or download' button
- Open terminal and "yarn start"

## Dependencies:

- create an account on rapidapi.com to get api key for the web search

All in terminal when cd is project-2-api:
- yarn install
- bulma - yarn add bulma
- axios - yarn add axios
- aztro-js - yarn add aztro-js

## Process

I already had an initial idea for what public API to use (horoscope). The concept is popular and easy enough so that we could spend more time on understanding  how to use the API. We discussed how we could use it with the added feature of a second API.
As this was my first pair project we set up a git repo together, and would notify each other of when pushes were made to the repo.
In our first session we built the basic structure together using <p></p> tags to return hard-coded information on pages to check if they worked using live code share. At the end of our session we divided the work and what components we would work on personally. In future class time we would discuss what was done and what needed to be done.
When a problem occurred we would share it, research and help each other to resolve it
A new feature we used was storing data onto the local storage so that it could be used on another component by the APIs ( first you have to convert the JavaScript object or value to a JSON string, then you can store it)
What was stored:
- Value of buttons from HoroscopeIndex.js
- User info data from UserInfo.js
- The response from the horoscope API so that it could be used by the news API in its search

## Wireframe

![Wireframe](https://user-images.githubusercontent.com/85836801/149669516-bf17d23c-fff2-43f8-b5b9-2e49dbfd08c0.jpg)


## Challenges

- The main struggle was calling the APIs to the page. Once I took the time to read the documentation properly and interpret it. Things became easier  
- Took a while to figure out how to store data to local storage. Once figured out it was one of my favourite new things i learnt during this project
- Styling in general was quite tricky with multiple elements
- when using the News API, because we used the documentation to pull the data over it kept sending out multiple requests and we were unsure on how to rearrange it so that it would only make one request. In the end we wrapped it in a useEffect to limit the calls made

## Wins

- When we changed or did something significant we would share and explain what we did to each other so that we could both benefit from what our partner had learnt
- Styling of HoroscopeIndex.js page as lots of images and buttons needed to be arranged and I think it looks neat by the end
- Had a good well rounded app at the end of project time

## Future

- The Horoscope API had links for yesterday and tomorrow readings. So to expand the site it would be good to use those aspects of the API.
- Making the code more DRY. I noticed that the HoroscopeDaily.js and HoroscopeCard.js pages were basically using many of the same functions and learning to condense the coding would be a good skill to practice.
- A warning or error message when user does not fill out UserInfo.js
