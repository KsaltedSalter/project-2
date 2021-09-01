import React from 'react'

const Activites = () => {
  const [NEWS, setNEWS] = React.useState([])
  const axios = require('axios').default
  const json = localStorage.getItem('horoscope')
  const horoscopeInfo = JSON.parse(json)
  console.log(horoscopeInfo)

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
      'x-rapidapi-key': 'a98775c577msh9ebc2c8a251cf73p16253ejsn505f9f2fce4d',
    },
  }

  axios
    .request(options)
    .then(function (response) {
      //console.log(response.data.value)
      const newsBody = response.data.value[0]
      console.log(newsBody.title)
      setNEWS(newsBody.title)
    })
    .catch(function (error) {
      console.error(error)
    })

  return <p>{NEWS}</p>
}

export default Activites
