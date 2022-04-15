# Project Two - React App Using Public APIs

## Project Overview

Second project on the Software Engineering course at General Assembly. A pair project with  [James Marrs](https://github.com/marrsjames), over 2 weeks to build a React application that uses two public APIs (Horoscope and News).

[Click for Horoscope Site](https://sei-horoscope.netlify.app/) 

<img width="1364" alt="Screenshot 2022-01-16 at 16 56 56" src="https://user-images.githubusercontent.com/85836801/149669758-4053fe6d-b089-412c-850d-288b190b5444.png"> 

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Dependencies](#dependencies)
- [Group Planning](#group planning)
- [Process](#process)
- [Wireframe](#wireframe)
- [Challenges](#challenges)
- [Wins](#wins)
- [Key Learnings](#key learnings)
- [Future Features](#future features)

## Technologies

Project is created with:

- JavaScript
- HTML
- Sass (SCSS)
- GitHub
- React

## Setup

- Access the source code via the 'Clone or download' button
- Open terminal and "yarn start"

## Dependencies:

- Create an account on rapidapi.com to get api key for the web search

All in terminal when cd is project-2-api:
- yarn install
- bulma - yarn add bulma
- axios - yarn add axios
- aztro-js - yarn add aztro-js

## Group Planning

Initially, James and I had one main meeting to discuss our ideas of what we wanted to achieve and how to go about it. We set up our GitHub repo and basic coding structure through screen sharing and live server on VS. At the end of our first session we divided the work by choosing for ourselves which elements we would like to work on. James worked on displaying the Horoscope cards for each user and daily searches, as well as displaying the information from the News API. I worked mainly on the gathering, storing and using of the user info, Home and Nav Bar, and the Horoscope index page. Between class time we would notify each other on any pushes we made to the repo, any new elements we were taking on or issues that had popped up. Our planning in this project was quite informal.

## Process

I already had an initial idea for what public API to use (horoscope). The concept is popular and easy enough so that we could spend more time on understanding how to use the API and I felt like the queries we would potentially make would be easy enough to do. We discussed how we could use it with the added feature of a second News API.
In our first session we built the basic structure together in React using <p></p> tags to return hard-coded information on pages to check if they worked in the browser using live code share. 
The Home component was set up to start off as the title page of our site. It contained basic information to start our navigation for the user. When the “Check it out” button is clicked it pushes the user to the ‘UserInfo’ component. This component takes the form data which the user provides, name and star sign, and stores it in the browser's local storage.

```
const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state.formData);
    const json = JSON.stringify(state.formData);
    localStorage.setItem("userInfo", json);
    history.push("/today");
  };
```
We thought it best to use a drop down menu / option tag to store the form data of the star signs instead of an input tag so as not to have any spelling mistakes for the star signs, this data needs to be exact for the horoscope API to use.

To begin with, we were not sure how to store the data the API would need to make a query. I did some research and came across a method of storing the data in the browser’s local storage, shown above. Once the user has inputted the form data and clicked the "Discover your personalised horoscope" submit, this actives the handleSubmit function, which takes the form data, converts it into JSON and stores it in the local storage under the key “UserInfo”

<img width="1439" alt="Screenshot 2022-02-18 at 12 58 09" src="https://user-images.githubusercontent.com/85836801/154687489-f799811f-2516-4b28-8412-24933ef3eb1b.png"> 

This then pushes you to the ‘HoroscopeCard’ component, where we actually call the API to create a daily horoscope reading for the user. 

The UserInfo data in the local storage is retrieved using a useEffect

```
React.useEffect(() => {
    const json = localStorage.getItem("userInfo");
    const savedInfo = JSON.parse(json);
    console.log(savedInfo);
    if (savedInfo) {
      setinfo(savedInfo);
    }
  }, []);
```
Then using the Horoscope API documentation as a guide, we can make a request to the API and retrieve the daily reading for the star sign in the user info 

```
const request = require("request");

  const options = {
    url: `https://aztro.sameerkumar.website/?sign=${info.starsign}&day=${day}`,
    method: "POST"
  };

  React.useEffect(() => {
    function callback(error, response, body) {
      if (!error && response.statusCode === 200) {
        const horoscopeBody = JSON.parse(body);
        localStorage.setItem("horoscope", body);
        console.log(body);
        console.log(horoscopeBody.date_range);
        console.log(info.starsign);
        setHoroscope(horoscopeBody);
      }
    }

    request(options, callback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);
```
The information sent back is then displayed for the user. The information is also stored in the local storage under the ’horoscope’ key, to be used by the News API later. 

<img width="1440" alt="Screenshot 2022-02-18 at 13 09 34" src="https://user-images.githubusercontent.com/85836801/154688794-5fb27dff-a586-49a7-b9eb-565bb8dfc350.png">

At the bottom of the page there are three button options where you can: 
- Start again with your own personal data, which will clear the UserInfo stored in the local storage using the ‘handleClick’ function
```
const handleClick = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("horoscope");
  };
```
- Have a generic look at all the star signs. This component (HoroscopeIndex) would take the value of the star sign button and store it in the local storage to be used by the Horoscope API to request the data. Which is displayed using the HoroscopeDaily component
- And lastly, pushes you to the component that makes a request to the News API using data from your horoscope to bring up related news articles.

The Activities component does a similar process as the ‘HoroscopeCard’ component were instead of using the UserInfo data in the local storage, it now uses the horoscope data to take the colour, lucky number, lucky time and mood to make a request to the News API and fetch relative articles using the above data as a search.

```
const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
    params: {
      q: `${horoscopeInfo.color} ${horoscopeInfo.lucky_number} ${horoscopeInfo.lucky_time} ${horoscopeInfo.mood} `,
      pageNumber: '1',
      pageSize: '10',
      autoCorrect: 'true',
      fromPublishedDate: 'null',
      toPublishedDate: 'null',
    },
    headers: {
      'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
      'x-rapidapi-key': '61001d32b2mshd5bca778459aca0p18772ajsn3cc0609d198c',
    },
  }
```
For styling we mainly used bulma and [Smashicons](https://www.flaticon.com/authors/smashicons) for the horoscope icons.

## Wireframe

![Wireframe](https://user-images.githubusercontent.com/85836801/149669516-bf17d23c-fff2-43f8-b5b9-2e49dbfd08c0.jpg) 

## Challenges

- The main struggle was calling the APIs to the page. Once I took the time to read the documentation properly and interpret it, things became easier  
- Took a while to figure out how to store data to local storage. Once figured out, it was one of my favourite new things I learnt during this project
- Styling in general was quite tricky with multiple elements
- When using the News API, because we used the documentation to pull the data over, it kept sending out multiple requests and we were unsure on how to rearrange it so that it would only make one request. In the end we wrapped it in a useEffect to limit the calls made

## Wins

- When we changed or did something significant we would share and explain what we did to each other so that we could both benefit from what our partner had learnt
- Styling of HoroscopeIndex.js page as lots of images and buttons needed to be arranged and I think it looks neat by the end
- Had a good well rounded app at the end of project time

## Key Learnings
- Reading documentation is important
- The planning done in this project with how to divide the work could have been more structured. This was our first group project, so I expected there would be a great deal to learn and experience on what works best when working in a group

## Future Features

- The Horoscope API had links for yesterday and tomorrow readings. So to expand the site, it would be good to use those aspects of the API.
- Making the code more DRY. I noticed that the HoroscopeDaily.js and HoroscopeCard.js pages were basically using many of the same functions and learning to condense the coding would be a good skill to practise.
- A warning or error message when user does not fill out UserInfo.js
