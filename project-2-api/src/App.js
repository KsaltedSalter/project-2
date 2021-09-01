import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import NavBar from './components/common/NavBar'
import HoroscopeCard from './components/horoscopes/HoroscopeCard'
import HoroscopeIndex from './components/horoscopes/HoroscopeIndex'
import Activities from './components/horoscopes/Activities'
import UserInfo from './components/horoscopes/UserInfo'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user-info' component={UserInfo} />
        <Route exact path='/today' component={HoroscopeCard} />
        <Route exact path='/all' component={HoroscopeIndex} />
        <Route exact path='/activities' component={Activities} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
