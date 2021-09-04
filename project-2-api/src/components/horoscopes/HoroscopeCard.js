import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aries from "../../img/aries.png";
import taurus from "../../img/taurus.png";
import gemini from "../../img/gemini.png";
import cancer from "../../img/cancer.png";
import leo from "../../img/leo.png";
import virgo from "../../img/virgo.png";
import libra from "../../img/libra.png";
import scorpio from "../../img/scorpio.png";
import sagittarius from "../../img/sagittarius.png";
import capricorn from "../../img/capricorn.png";
import aquarius from "../../img/aquarius.png";
import pisces from "../../img/pisces.png";

//import { getSingleHoroscope } from "../api/api";

const HoroscopeCard = () => {
  const [horoscope, setHoroscope] = React.useState([]);
  const [info, setinfo] = React.useState([]);
  let backgroundhoroImage = "";
  switch (info.starsign) {
    case "taurus":
      backgroundhoroImage = taurus;
      break;
    case "aries":
      backgroundhoroImage = aries;
      break;
    case "gemini":
      backgroundhoroImage = gemini;
      break;
    case "cancer":
      backgroundhoroImage = cancer;
      break;
    case "leo":
      backgroundhoroImage = leo;
      break;
    case "virgo":
      backgroundhoroImage = virgo;
      break;
    case "libra":
      backgroundhoroImage = libra;
      break;
    case "scorpio":
      backgroundhoroImage = scorpio;
      break;
    case "sagittarius":
      backgroundhoroImage = sagittarius;
      break;
    case "capricorn":
      backgroundhoroImage = capricorn;
      break;
    case "aquarius":
      backgroundhoroImage = aquarius;
      break;
    case "pisces":
      backgroundhoroImage = pisces;
      break;

    default:
      console.log("nothing");
  }
  //page will include
  // horoscope stats
  // links to horoscope index (shows all 12)
  // 2nd API data = best thing to do because of (stats data search)

  //const sign = "cancer";

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
          <h1 className="title is-2 has-text-centered has-text-black">
            Hi {info.name}! This is your personalised reading for {day}
          </h1>
          <img src={backgroundhoroImage} alt={backgroundhoroImage} />
          <p className="subtitle is-4 is-italic mt-2">
            {horoscope.description}
          </p>
          <h2 className="title is-3">Your lucky colour</h2>
          <p className="subtitle is-4 is-italic">{horoscope.color}</p>
          <h2 className="title is-3">Your lucky time</h2>
          <p className="subtitle is-4 is-italic">{horoscope.lucky_time}</p>
          <h2 className="title is-3">Your compatible Star Sign</h2>
          <p className="subtitle is-4 is-italic">{horoscope.compatibility}</p>
          <h2 className="title is-3">Your mood</h2>
          <p className="subtitle is-4 is-italic">{horoscope.mood}</p>
          <h2 className="title is-3">Your lucky number</h2>
          <p className="subtitle is-4 is-italic">{horoscope.lucky_number}</p>
          <hr />
          <Link
            to={"/user-info"}
            className="button is-link is-rounded"
            onClick={handleClick}
          >
            <p>New personalised horoscope</p>
          </Link>{" "}
          <Link
            to={"/all"}
            className="button is-link is-light is-rounded"
            onClick={handleClick}
          >
            <p>See all star signs</p>
          </Link>{" "}
          <Link to={"/activities"} className="button is-link is-rounded">
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
