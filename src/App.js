import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Menu from './Menu/Menu';
import HomePage from './HomePage/Homepage';
import LoginPage from './LoginPage/LoginPage';
import SignoutPage from './Signout/SignoutPage';
import SignupPage from './SignupPage/SignupPage';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';


function App() {
  return (
    <Router>
      <Menu/>
      <div className="mainContainer">
        <Switch>
        <Route path="/Dashboard">
              <Dashboard/>
              <SignoutPage/>
              </Route>
          <Route path="/">
            <HomePage/>
            <LoginPage/>
            <SignoutPage/>
            <SignupPage/>
          </Route>
        </Switch>
        <Profile/>
      </div>
    </Router>
  );
}

export default App;
