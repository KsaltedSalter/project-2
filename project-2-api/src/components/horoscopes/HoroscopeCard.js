import React from "react";
import { Link } from "react-router-dom";

//import { getSingleHoroscope } from "../api/api";

const HoroscopeCard = () => {
  const [horoScope, setHoroscope] = React.useState([])
  const [info, setinfo] = React.useState([])

  //page will include
  // horoscope stats
  // links to horoscope index (shows all 12)
  // 2nd API data = best thing to do because of (stats data search)

  //const sign = "cancer";
  let day = "today";

  React.useEffect(() => {
    const json = localStorage.getItem('userInfo')
    const savedInfo = JSON.parse(json)
    console.log(savedInfo)
    if (savedInfo) {
      setinfo(savedInfo)
    }
  }, [])


  const handleClick = () => {
    localStorage.removeItem("userInfo");
  };

  const request = require("request");

  const options = {
    url: `https://aztro.sameerkumar.website/?sign=${info.starsign}&day=${day}`,
    method: 'POST',
  }

  React.useEffect(() => {
    function callback(error, response, body) {
      if (!error && response.statusCode === 200) {
        const horoscopeBody = JSON.parse(body)
        localStorage.setItem('horoscope', body) //only worthwhile new bit
        console.log(body)
        console.log(horoscopeBody.date_range)
        console.log(info.starsign)
        setHoroscope(horoscopeBody)
      }
    }


    request(options, callback);
  }, [info]);

  if (options === 400) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {info ? (
        <>
          <h1>
            Hi {info.name}! This is your reading for {day}
          </h1>
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
          <Link to={"/user-info"} className="button" onClick={handleClick}>
            <p>new horoscope</p>
          </Link>{" "}
          <Link to={"/all"} className="button" onClick={handleClick}>
            <p>All Signs</p>
          </Link>{" "}
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default HoroscopeCard
