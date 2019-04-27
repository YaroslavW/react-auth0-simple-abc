import React, { Component } from 'react';
import Public from './Components/Public';
import Private from './Components/Private';
import Login from './Components/Login';
import {Nav, NavLink} from './Components/Navigation';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthProvider } from './Components/Auth';
import { PrivateRoute } from './Components/PrivateRoute';
import './App.css';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="App">
        <Nav>
          <NavLink to="/public">
            Public
          </NavLink>
          <NavLink to="/private">
            Private
          </NavLink>
        </Nav>
        <Switch>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
          <Redirect to="/public"/>
        </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
