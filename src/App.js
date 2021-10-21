import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Homepage from './components/HomePage/Homepage';
import SignupPage from './components/SignUpPage/SignUpPage';
import LogInPage from './components/LogInPage/LogInPage';
import PrivateRoute from './components/PrivateRoute';
import MarketPage from './components/MarketPage/MarketPage';
import Logout from './components/Logout/Logout';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Homepage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LogInPage} />
				<PrivateRoute exact path="/market" component={MarketPage} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
