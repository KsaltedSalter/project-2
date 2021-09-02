import React from "react";
import { Link } from "react-router-dom";

const HoroscopeDaily = () => {
  const [horoScope, setHoroscope] = React.useState([]);
  const [info, setinfo] = React.useState([]);

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
    localStorage.removeItem("userInfo");
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
  }, [info]);

  return (
    <>
      {horoScope.description ? (
        <>
          <h1>Your reading for {day}</h1>
          <p>{horoScope.description}</p>
          <h2>Your lucky colour</h2>
          <p>{horoScope.color}</p>
          <h2>Your lucky time</h2>
          <p>{horoScope.lucky_time}</p>
          <h2>Your compatible Star Sign</h2>
          <p>{horoScope.compatibility}</p>
          <h2>Your mood</h2>
          <p>{horoScope.mood}</p>
          <h2>Your lucky number</h2>
          <p>{horoScope.lucky_number}</p>
          <Link to={"/all"} className="button" onClick={handleClick}>
            <p>Back</p>
          </Link>{" "}
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default HoroscopeDaily;
