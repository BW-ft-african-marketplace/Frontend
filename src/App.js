import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Homepage from './components/HomePage/Homepage';
import SignupPage from './components/SignUpPage/SignUpPage';
import LogInPage from './components/LogInPage/LogInPage';

import Logout from './components/Logout/Logout';
import PrivateRoute from './components/PrivateRoute';


function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LogInPage} />
        <Route path="/signup" component={SignupPage} />
        <Route exact path="/home" component={Homepage} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
