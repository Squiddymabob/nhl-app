import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Teams from '../components/Teams/Teams';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Scores from '../components/Scores/Scores';

function App(props) {
  App.propTypes = {
    darkThemeEnabled: PropTypes.bool.isRequired,
  };

  const { darkThemeEnabled } = props;
  return (
    <div className={`App ${darkThemeEnabled ? 'bg-dark' : 'bg-light'}`}>
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

const mapStateToProps = (state) => ({ darkThemeEnabled: state.preferences.darkThemeEnabled });

export default connect(mapStateToProps)(App);
