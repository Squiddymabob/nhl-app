import React from 'react';
import { getGames } from '../api/api';
import ScoreCard from './ScoreCard';

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      dates: [],
    };
  }

  componentDidMount() {
    const startDate = '2020-08-05';
    const endDate = '2020-08-07';
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
                <div className="card m-4 text-black bg-secondary">
                  <ScoreCard
                    awayAbbr={game.teams.home.team.abbreviation}
                    homeAbbr={game.teams.away.team.abbreviation}
                    awayId={game.teams.away.team.id}
                    homeId={game.teams.home.team.id}
                    awayScore={game.teams.away.score}
                    homeScore={game.teams.home.score}
                    currentPeriodOrdinal={game.linescore.currentPeriodOrdinal}
                    currentPeriodTimeRemaining={game.linescore.currentPeriodTimeRemaining}
                  />
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
