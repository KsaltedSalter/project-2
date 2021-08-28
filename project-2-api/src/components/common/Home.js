import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  // wellcome info here
  // button to history push to UserInfo
  return (
    <div>
      <h1 className='title is-1 has-text-centered has-text-black'>
        Daily Horoscopes
      </h1>
      <p className='has-text-centered has-text-black'>
        find out your daily reading by clicking below!
      </p>

      <Link to={'/user-info'} className='button'>
        <p>new horoscope</p>
      </Link>
    </div>
  )
}

export default Home
