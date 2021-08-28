import React from 'react'
import { useHistory } from 'react-router-dom'

// ask for name (text input) and star sign (selector)
// store in local storage
// buton that history push to star sign stat for the day

const UserInfo = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      name: '',
      starsign: '', //selector
      location: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(state.formData)
    history.push('')
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    }

    setState({ formData })
  }

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <form
            onSubmit={handleSubmit}
            className='column is-half is-offset-one-quarter box'
          >
            <div className='field'>
              <label className='label'>Name</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Name'
                  name='name'
                  value={state.formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Starsign</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Starsign'
                  name='starsign'
                  value={state.formData.starsign}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Location</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Locatiom'
                  name='location'
                  value={state.formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <input
                className='button is-fullwidth is-warning'
                type='submit'
                value='UserInfo'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserInfo
