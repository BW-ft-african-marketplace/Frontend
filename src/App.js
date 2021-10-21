import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Homepage from './components/HomePage/Homepage';
import SignupPage from './components/SignUpPage/SignUpPage';
import LogInPage from './components/LogInPage/LogInPage';
import UserPage from './components/Users/UserPage';
import Logout from './components/Logout/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Homepage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LogInPage} />
				<PrivateRoute exact path="/users/:id" component={UserPage} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
