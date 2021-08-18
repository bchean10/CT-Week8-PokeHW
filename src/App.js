import './App.css';
import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Poke from './views/Poke'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <br/>
        <br/>

        <Switch>
          <Route exact path ="/" render={()=><Poke/>}/>
        </Switch>
      </div>
    )
  }
}
