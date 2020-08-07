import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Teams from '../components/Teams/Teams';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Scores from '../components/Scores/Scores';

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
