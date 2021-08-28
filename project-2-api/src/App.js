import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import NavBar from './components/common/NavBar'
import UserInfo from './components/horoscopes/UserInfo'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user-info' component={UserInfo} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
