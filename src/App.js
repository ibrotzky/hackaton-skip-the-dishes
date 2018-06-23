import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"

//Screens
import UserList from './screens/UserList'
import NewUser from './screens/NewUser'

import './css/App.css'

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          <Switch>
            <Route exact path='/' component={UserList} />
            <Route exact path='/NewUser' component={NewUser} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
