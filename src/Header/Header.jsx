import React from 'react';

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
      <a className="navbar-brand" href="/">TITLE</a>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
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
