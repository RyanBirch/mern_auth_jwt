import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <div className="container" style={{ paddingTop: "9em", paddingBottom: "3em" }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App
