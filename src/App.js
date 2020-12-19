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
import LogoutPage from './LogoutPage/LogoutPage';
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
              <LogoutPage/>
              </Route>
          <Route path="/">
            <HomePage/>
            <LoginPage/>
            <LogoutPage/>
            <SignupPage/>
          </Route>
        </Switch>
        <Profile/>
      </div>
    </Router>
  );
}

export default App;
