import React from 'react';
import './Teams.css';
import { getCurrentTeams } from '../api/api';

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
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div className="row">
          {teams.map((team) => (
            <div className="col-4 p-2">
              <div className="card p-4">
                <img
                  src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{team.name}</h5>
                  <p className="card-text">fdsaufhsdfiuh</p>
                  <a href="/" className="btn btn-primary">Go</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
  }
}

export default Teams;
