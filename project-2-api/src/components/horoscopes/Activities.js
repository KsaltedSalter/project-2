import React from 'react'

const Activites = () => {
  const [NEWS, setNEWS] = React.useState([])
  const [NEWSimage, setNEWSimage] = React.useState([])
  //wrap axios in button
  const axios = require('axios').default
  const json = localStorage.getItem('horoscope')
  const horoscopeInfo = JSON.parse(json)
  console.log(horoscopeInfo)

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
      pageSize: '3',
      autoCorrect: 'true',
      fromPublishedDate: 'null',
      toPublishedDate: 'null',
    },
    headers: {
      'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
      'x-rapidapi-key': 'eb499342e9mshbdc31337851737ep193f5ajsn3bbb2c7e520c',
    },
  }

  axios
    .request(options)
    .then(function (response) {
      const newsBody = response.data.value[0] //single news piece
      //const newsBody = response.data.value //try map through array
      setNEWS(newsBody)
      console.log(newsBody)
      setNEWSimage(newsBody.image)
    })
    .catch(function (error) {
      console.error(error)
    })

  return (
    <>
      {NEWS.url ? (
        <div>
          {/* {NEWS.map((NEW) => (
            <a href={NEW.url}>
              <h1 className='title is-1'>{NEW.title}</h1>
            </a>
          ))} */}
          <a href={NEWS.url}>
            <h1 className='title is-1'>{NEWS.title}</h1>
            <img src={NEWSimage.url} alt={NEWS.title}></img>
            <h2 className='title is-2'>{NEWS.description}</h2>
          </a>
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
