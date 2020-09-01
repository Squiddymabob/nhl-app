import React from 'react';
import './Teams.css';
import PropTypes from 'prop-types';
import { getCurrentTeams } from '../../api/api';

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      teams: [],
    };
  }

  componentDidMount() {
    getCurrentTeams().then((response) => {
      const teams = response.teams || [];
      this.setState({ isLoaded: true });
      this.setState({ teams });
    });
  }

  render() {
    const { isLoaded, teams } = this.state;
    const { darkThemeEnabled } = this.props;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container mt-4">
        <div className="row mt-2 mb-2">
          {teams.map((team) => (
            <div className="col-xs-12 col-md-3 p-2">
              <div className={`card p-4 ${darkThemeEnabled ? 'text-white bg-primary' : 'text-black bg-secondary'}`}>
                <img
                  src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-${darkThemeEnabled
                    ? 'dark' : 'light'}/${team.id}.svg`}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{team.name}</h5>
                  <p className="card-text">{team.abbreviation}</p>
                  <a href="/" className="btn btn-primary-button">Go</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
  }
}

Teams.propTypes = {
  darkThemeEnabled: PropTypes.bool.isRequired,
};

export default Teams;
