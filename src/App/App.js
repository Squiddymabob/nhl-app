import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Teams from '../Teams/Teams';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Scores from '../Scores/Scores';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/scores">
            <Scores />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
