import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 pt-3">
      <a className="mt-5 mr-3" href="/">
        <img
          src="https://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg"
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="NHL Logo"
        />
      </a>
      <a className="navbar-brand" href="/">NHL</a>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/scores">Scores</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teams">Teams</Link>
          </li>
        </ul>
        <span className="navbar-text">
          Right aligned
        </span>
      </div>
    </nav>
  );
}

export default Header;
