import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Activites = () => {
  const [NEWS, setNEWS] = React.useState([])

  //wrap axios in button

  const json = localStorage.getItem('horoscope')
  const horoscopeInfo = JSON.parse(json)
  //  console.log(horoscopeInfo)

  // useEffect(() => {
  //   axios.get('ENDPOINT)
  //     .then(({ data }) => {
  //       updateState(data.whatever)
  //     })
  // }, [])

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

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        //        console.log(response.data.value)
        //const newsBody = response.data.value[0] //single news piece
        const newsBody = response.data.value //try map through array
        setNEWS(newsBody)
        console.log(newsBody)
        //        console.log(newsBody)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <>
      {NEWS[0] ? (
        <div className='container mt-4'>
          {NEWS.map((NEW) => (
            <div key={NEW.id} className='has-text-centered is-hovered'>
              <a href={NEW.url}>
                <h1 className='title is-3'>{NEW.title}</h1>
                <img src={NEW.image.url} alt={NEW.title} height='50'></img>
              </a>
              <h2 className='subtitle is-4 is-italic'>{NEW.description}</h2>
              <hr />
            </div>
          ))}
          <div className='has-text-centered mb-4'>
            <Link to={'/today'} className='button is-link is-rounded'>
              <p>Back to your horoscope</p>
            </Link>{' '}
          </div>
        </div>
      ) : (
        <p>Loading news stories...</p>
      )}
    </>
  )
}

export default Activites

//
//429
