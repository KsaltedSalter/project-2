import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//import { getSingleHoroscope } from "../api/api";

const HoroscopeCard = () => {
  const [horoscope, setHoroscope] = React.useState([]);
  const [info, setinfo] = React.useState([]);

  let day = "today";

  React.useEffect(() => {
    const json = localStorage.getItem("userInfo");
    const savedInfo = JSON.parse(json);
    console.log(savedInfo);
    if (savedInfo) {
      setinfo(savedInfo);
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("horoscope");
  };

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
  }, [info]);

  return (
    <>
      {horoscope.description ? (
        <div className="container">
          <h1 className="title is-1 has-text-centered has-text-black">
            Hi {info.name}! This is your personalised reading for {day}
          </h1>
          <p>{horoscope.description}</p>
          <h2 className="title is-2">Your lucky colour</h2>
          <p>{horoscope.color}</p>
          <h2 className="title is-2">Your lucky time</h2>
          <p>{horoscope.lucky_time}</p>
          <h2 className="title is-2">Your compatible Star Sign</h2>
          <p>{horoscope.compatibility}</p>
          <h2 className="title is-2">Your mood</h2>
          <p>{horoscope.mood}</p>
          <h2 className="title is-2">Your lucky number</h2>
          <p>{horoscope.lucky_number}</p>
          <Link to={"/user-info"} className="button" onClick={handleClick}>
            <p>new personalised horoscope</p>
          </Link>{" "}
          <Link to={"/all"} className="button" onClick={handleClick}>
            <p>See All Signs</p>
          </Link>{" "}
          <Link to={"/activities"} className="button">
            <p>News stories just for you</p>
          </Link>{" "}
        </div>
      ) : (
        <p>Loading your future...</p>
      )}
    </>
  );
};

export default HoroscopeCard;
