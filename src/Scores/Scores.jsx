import React from 'react';
import { getGames } from '../api/api';

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      dates: [],
    };
  }

  componentDidMount() {
    const startDate = '2020-08-06';
    const endDate = '2020-08-06';
    getGames(startDate, endDate).then((response) => {
      const dates = response.dates || [];
      this.setState({ isLoaded: true });
      this.setState({ dates });
    });
  }

  render() {
    const { isLoaded, dates } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div className="row">
          {/* For each date, then show the games on that date */}
          {dates.map((date) => (
            <div className="col-4 p-2">
              {date.date}
              {date.games.map((game) => (
                <div className="card m-4 text-white bg-dark">
                  {game.teams.away.team.name}
                  {' '}
                  {game.teams.away.score}
                  {game.teams.home.team.name}
                  {' '}
                  {game.teams.home.score}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    );
  }
}

export default Teams;
