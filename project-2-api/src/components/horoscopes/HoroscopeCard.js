import React from 'react'

//import { getSingleHoroscope } from "../api/api";

const HoroscopeCard = () => {
  const [horoScope, setHoroscope] = React.useState([])
  const [info, setinfo] = React.useState([])

  //page will include
  // horoscope stats
  // links to horoscope index (shows all 12)
  // 2nd API data = best thing to do because of (stats data search)

  //const sign = "cancer";
  const day = 'today'

  React.useEffect(() => {
    const json = localStorage.getItem('userInfo')
    const savedInfo = JSON.parse(json)
    console.log(savedInfo)
    if (savedInfo) {
      setinfo(savedInfo)
    }
  }, [])

  const request = require('request')

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

    request(options, callback)
    console.log(options.url)
  }, [info])

  //if (options === null) {
  //  return <p>Loading...</p>
  //}

  return (
    <>
      <h1>Your horoscope</h1>
      <p>{horoScope.description}</p>
      <h2>Your lucky colour</h2>
      <p>{horoScope.color}</p>
      <h2>Your lucky time</h2>
      <p>{horoScope.lucky_time}</p>
    </>
  )
}

export default HoroscopeCard
