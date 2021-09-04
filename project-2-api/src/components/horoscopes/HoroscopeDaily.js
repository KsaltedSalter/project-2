import React from "react";
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

const HoroscopeDaily = () => {
  const [horoScope, setHoroscope] = React.useState([]);
  const [info, setinfo] = React.useState([]);
  let backgroundhoroImage = "";
  switch (info) {
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

  let day = "today";

  React.useEffect(() => {
    const json = localStorage.getItem("value");
    const savedInfo = JSON.parse(json);
    console.log(savedInfo);
    if (savedInfo) {
      setinfo(savedInfo);
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem("value");
  };

  const request = require("request");

  const options = {
    url: `https://aztro.sameerkumar.website/?sign=${info}&day=${day}`,
    method: "POST"
  };

  React.useEffect(() => {
    function callback(error, response, body) {
      if (!error && response.statusCode === 200) {
        const horoscopeBody = JSON.parse(body);
        console.log(body);
        console.log(horoscopeBody.date_range);
        console.log(info);
        setHoroscope(horoscopeBody);
      }
    }

    request(options, callback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  return (
    <>
      {horoScope.description ? (
        <div className="container has-text-centered">
          <h1 className="title is-2 has-text-centered has-text-black">
            Your reading for {day}
          </h1>
          <img src={backgroundhoroImage} alt={backgroundhoroImage} />
          <p className="subtitle is-4 is-italic mt-2">
            {horoScope.description}
          </p>
          <h2 className="title is-3">Your lucky colour</h2>
          <p className="subtitle is-4 is-italic">{horoScope.color}</p>
          <h2 className="title is-3">Your lucky time</h2>
          <p className="subtitle is-4 is-italic">{horoScope.lucky_time}</p>
          <h2 className="title is-3">Your compatible Star Sign</h2>
          <p className="subtitle is-4 is-italic">{horoScope.compatibility}</p>
          <h2 className="title is-3">Your mood</h2>
          <p className="subtitle is-4 is-italic">{horoScope.mood}</p>
          <h2 className="title is-3">Your lucky number</h2>
          <p className="subtitle is-4 is-italic">{horoScope.lucky_number}</p>
          <hr />
          <Link
            to={"/all"}
            className="button is-link is-rounded"
            onClick={handleClick}
          >
            <p>Back</p>
          </Link>{" "}
        </div>
      ) : (
        <p>Loading your future...</p>
      )}
    </>
  );
};

export default HoroscopeDaily;
