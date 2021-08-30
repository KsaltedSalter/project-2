import React from "react";

//import { getSingleHoroscope } from "../api/api";

const HoroscopeCard = () => {
  //page will include
  // horoscope stats
  // links to horoscope index (shows all 12)
  // 2nd API data = best thing to do because of (stats data search)
  const sign = "leo";
  const day = "today";

  const request = require("request");

  const options = {
    url: `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`,
    method: "POST"
  };

  function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body);
    }
  }

  request(options, callback);

  return <p>todays "star sign" info</p>;
};

export default HoroscopeCard;
