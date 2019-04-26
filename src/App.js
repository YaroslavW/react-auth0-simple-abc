import React, { Component } from 'react';
import Public from './Components/Public';
import Private from './Components/Private';
import Login from './Components/Login';
import {Nav, NavLink} from './Components/Navigation';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav>
          <NavLink to="/public" component={Public}>
            Public
          </NavLink>
          <NavLink to="/private" component={Private}>
            Private
          </NavLink>
        </Nav>
        <Switch>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <Route path="/private" component={Private}/>
          <Redirect to="/public"/>
        </Switch>

      </div>
    );
  }
}

export default App;
