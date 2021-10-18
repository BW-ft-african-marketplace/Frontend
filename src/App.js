import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Homepage from './components/HomePage/Homepage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Homepage} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
