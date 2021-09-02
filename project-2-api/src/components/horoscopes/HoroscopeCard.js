import React from 'react'
import { Link } from 'react-router-dom'

//import { getSingleHoroscope } from "../api/api";

const HoroscopeCard = () => {
  const [horoScope, setHoroscope] = React.useState([])
  const [info, setinfo] = React.useState([])
  let backgroundhoroImage = ''
  switch (info.starsign) {
    case 'aries':
      backgroundhoroImage =
        'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADlCAMAAAAP8WnWAAAAflBMVEX///8AAAD39/f6+vrJyclBQUHu7u7T09Pq6uqmpqYiIiKZmZlYWFjb29u4uLgwMDAVFRXj4+N/f383NzeTk5OFhYWMjIyurq7d3d1ISEhgYGDFxcWzs7O/v79paWlVVVVvb293d3ccHBw1NTVsbGwrKytFRUUPDw89PT2enp5h77duAAAKeElEQVR4nN1d51ojOwxl0iYNmJACG0I2ofP+L3gT+MICOvIUH8nDPb9BljK2Vaxyln2imK+vRr3O2a9FJx9drefFP4nOsp+4XJyn5rIJbhZzIYoU7vgN337Z9+uOxkgOKNwBV4PUDFdHZ6kIoQmXZctuaqYrYqWKoAuXZdep2a6Ci4AAIeGy59bvzc7fEP9B4bLsIjX3YdyGuS8RLtun5j8E7SKpKlw2b69W+FPGe6lwWTZMLQTGAKq2usJlrbRYhhUYryJclqeWRGJWhe+z3gF316v175IuLNt0Nbo7yvXl798Cm7hlOzOwJ+8nN/h/cv37zXy5D2Ogf7PQHrt51v6tTcaKtsX6ZRtMs9XGLmxXgqbfNuX/2lE+3l97rqthj/l7rmZtKFbN0pjpiriO5E75/ztLnqviHPNWwz3rYQotuFS6mLPbOjSwdJdWLFfHFDLWK//Hr8CeUvJjN4r/bkfgc5fYDsOWSYNwCI678BmuAxmaPGDVhBLc3jsut/UwQRxNm9EqEK2aZ5cJuCmLhsRuWrYx+4idxhb9G6KW7MaEV9xbc3rQRFX8JWt0EC9/IghCx+mVxm8t7BEvUTYTVJoVXAs+oE05iqN5iWhy2K2HV8BHrDkIf7BGajMOG8RH9Onnb/VGQFzEh/rhJbUmsFsL0BYkBPqhzeNsQEPbZMKgjAg/MQhXBzRzKZRhPMxVHUDXmfR0+GD2u1UEilM+kGjnSDhHdQAtCdqph1F2N3VgfF/Dy8pNHezR6sQXURimdVIH0Ktk+l0wWugU6IMuKjUBKJ13ABVRpDfwEzCewl0CA63bNG6i4Q4t4qAOFmhd+qMF3Prm6gCGAvr0ZaBjZ64OoIY1eKDfoXWMo5jQqNwZLAQNBfbR/oF7tKZJvhZ07EzvFHibUNw4CagODHM4qOHzMsATYGinoICX3SmHDvHCajUYzLe7n3HmjlF4Had3GWpWaGLe26z1hNYiG5XfAZ82dxYrXaGV5hYrfQLvFQP3ANqy1ul1UNnxF8Uv+0Yq7h/gxuQ6j2dKXp7tpjwC/6ZkQx2XQjhkkuMElS1zCXiZ+FTf4HRaYsgGn2unaBu0MXmWCk6BMvY/PqGkhpPuMiUf0i3JGishjvuDv5tnrid0tChVTUqln5l1jgBjDoQ86C2mu4vnuA5wUmdWRB2NATSWG+euNYdWchhht8OMBcZ+qA+teuS5oSEx0H4u9+yCI7AdkTWsU1buqCy7ojNeCcqtfcCkrngwpPCOZCXPSo7/++9d42aZ6ZXeKcu/usqlecT8rdLhG4zgK8QH1mkL8bUb7h3j5W0woNPprWDi3AnJC7k7it494WW92OSDH1+gO8gvFlsYLP+HxzbUOeeK6v2Ooj9dr7fb9XraLxHqAw9tKSXdvFRhtw6K5DvyC66p4hVJcnEDuIOR/SZ4bUUp2w/c7Bmi1VGQjujhqF9NPCQsOVExDHYmqYO/rWsGEbCg6iNBgngAOQ6INUbRFiV3phY3x6AtTWZyugo/oh0fT/UyY+Ea8YLQ+gEwULFm3www/ZmHpFtTDzSQYPoGHsa+Iovz7bG1zPlsNhzOZue9u+vFLuB+f0OyW7O0NdUBfxa3isEx6E0CQYpPpGnm0QlGCI4Yr0rPzPmk1CC9THCtDEq0W7GoaN4PRyW/0ot7QZveBugd61r33Pk+TM1ZurBsy9rcdPBTcRLpgrItmx2SoHiO0nUC5+2xMR9d9fHhcO78bhU9lvcUFf6e6drPrRpR12/Rb/7Ka38WV8tfA3tt/TEhtjNQg2gutopqT5JWVwMWDnam6gfQYsRqo1hzHwFWFxxBDDcOtcvY+spULhOuAdhVDp7xpaJoWvqqShDUNJsUN+6xyDdQciUsG83gxpImuRRYOsNGlPiWNsoTwZ6sWTAapyKanXJ8d1k9AsEonqHRB03YZ5u1cENWQ92DdarNgzJcyrRPFk7isVgJqjjj5CXoJBgoO1jkT024R4BJLvy0IqQGXuirCCAzk64O4IdzCOVDJ4T96dCJc8mERIEV9qlDPyB5iWQro+Q8p1wYVMTA1XUg4s3vkKAAhMSoxWZIm7rlsKI7hWk7gFPt+LQEPFdmm56UHw7vGx51EI9yipF+ADg/vAyxR0m8dkfvGIAflxeiNd0WiRkADSfMi5q/A9hHrDMPbGbnrEFQ4sz6eaUGd1PgJ0hFTgo3AG/fPfcFvL5wCIO7yj0PGQTeOP6WTMvzKmv+ApmtGtE1/Quk9ZOgpE0agI8UunJHJCjXkHFFSmQdpGUkSB8HyoARbAAeB4FqbUguGG6PjB0mSaSTJ58RCZD2SZK0f9n5laFspUuQpEZWbiCGwyqdqSTVNtJ6Z7wLyjrFJHVS0kZh+MuCqHnGBIS0cBnN1KRwBKIt4QP4BPFEm8CCD2mgGPXWK4M0neNpSuESjdiTLnM8TWnUJRo6JFOm4o1LKZx7jOEDMtJgIdz/6MvJM+c8/OQEmZUST1OqAoeXcAT5Ok4gKmj+j/Rce4Vj6FupPJMMypVnn2E4S5cnyehAmcfKcHlkEo/r89UJMjTMcFZlmCFJIakMqDOistK/T1JHuhdsMAJE0r9PYqJIA4Vx9EFQlkC1NiQXlAwwSTZBGzWZ0cBJVJe6IMGNIu8TTq6nvC4TNGWUificJyyQWUahWwuSB87jI7hR3MOyIKGCRFkWubi/Pu4FC6x4AJg+R6JcGZIDVqoG2BPO5iXIOaDlV0vSzs2HQdESjTbI7k/dUIBn3wJl4DrsHhx64n0tiRuUZahANQ1E8ntJ3bFxFWi+xdw4KIfa7dOhD0eNdIA6PbdTB04cd84LqvVySrVB42TIbVnBCk453Kh0lbwE6qjnkgKGiknZSciwftTh5R+uS7/LUHGggxGG+hjwtRD8Cc3jDbD5ioESggW5xpF1WG7MiS/8AFrIVpXjQnGTpWARvGmAFrZFMapJhM0SDKupYR21lXbFo+fM4im4x5mZXYT72Bj5B7gRr6EzgptRmlQtYdkss5fwxrT4OZUGyqapnkq7OLr7o/QUNDYalMZHO+4qylAVc3NPaQHPvKG7WuNr4hoYykzErKDd0TOtYZtDbrXaCo/k3qljjFzcR7U/KiVQCiqbP+BUqrHX1i+i35P1XuzmTXNO0Dtnx9liXfVn8yy6D/TxjwhM6T1XffOqAxOGLhuG8W8DI7XGvqPaHnROsn4D8W5DA5kK7xqU4HSop5qFWte4/eLpu/nX15RMHLiq/PSZ78OUnlKMDyydNrCsIF8OXgK+w6hzYBlKfvEjpm+5+rt387cK0xiSTFk9Ityq/oTxdrHJZ1/OTWeWbxbb4DH7hOsL7ncos7cVFPfj8bjeYKlkU1aP0HwEEhJPVerSJrNJvKYf16lP7o1EKwa1nVcaLVobrRj0dRaYT90cu9Qy/UNe7V6vjJd2DX6knrxWnLavGKjxgbpYt26g5QE3FK3Qb8tF8hN5tHhNXEE33JQM4A5j2tavdsKg8QzIVRvPmkCvwedbt3Fas4KLWvKtNymc7Rjki0qjD+erNt8hIeSjXWBy3tNjwE//JRjmF5Pl47T/VLwcDKti/DrdLiebnsObzX8IB3H2LgrQCAAAAABJRU5ErkJggg=="'
      break
    case 'gemini':
      backgroundhoroImage =
        'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gemini.svg/1200px-Gemini.svg.png"'
      break
    default:
      console.log('nothing')
  }
  //page will include
  // horoscope stats
  // links to horoscope index (shows all 12)
  // 2nd API data = best thing to do because of (stats data search)

  //const sign = "cancer";
  let day = 'today'

  React.useEffect(() => {
    const json = localStorage.getItem('userInfo')
    const savedInfo = JSON.parse(json)
    console.log(savedInfo)
    if (savedInfo) {
      setinfo(savedInfo)
    }
  }, [])

  const handleClick = () => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('horoscope')
  }

  const request = require('request')

  const options = {
    url: `https://aztro.sameerkumar.website/?sign=${info.starsign}&day=${day}`,
    method: 'POST',
  }

  React.useEffect(() => {
    function callback(error, response, body) {
      if (!error && response.statusCode === 200) {
        const horoscopeBody = JSON.parse(body)
        localStorage.setItem('horoscope', body)
        console.log(body)
        console.log(horoscopeBody.date_range)
        console.log(info.starsign)
        setHoroscope(horoscopeBody)
      }
    }

    request(options, callback)
  }, [info])

  if (options === 400) {
    return <p>Loading...</p>
  }

  return (
    <>
      {info ? (
        <>
          <div
            style={{
              backgroundImage: backgroundhoroImage,
            }}
          >
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
            <Link to={'/user-info'} className='button' onClick={handleClick}>
              <p>new horoscope</p>
            </Link>{' '}
            <Link to={'/all'} className='button' onClick={handleClick}>
              <p>All Signs</p>
            </Link>{' '}
            <Link to={'/activities'} className='button'>
              <p>News stories for you</p>
            </Link>{' '}
          </div>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default HoroscopeCard
