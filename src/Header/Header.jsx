import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img
          src="https://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="NHL Logo"
        />
      </a>
    </nav>
  );
}

export default Header;
