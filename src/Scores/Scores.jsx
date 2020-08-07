import React from 'react';
import moment from 'moment-timezone';
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
    const startDate = moment().subtract(3, 'days').format('YYYY-MM-DD');
    const endDate = moment().add(3, 'days').format('YYYY-MM-DD');
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
        <div className="row mt-2 mb-2">
          {/* For each date, show the games on that date */}
          {dates.map((date) => (
            <div className="col-4 mt-2 mb-2">
              <div className="card text-white bg-info font-weight-bold p-2">
                {moment.tz(date.date, 'America/New_York').format('D MMM')}
              </div>

              {date.games.map((game) => (
                <ScoreCard
                  awayAbbr={game.teams.away.team.abbreviation}
                  homeAbbr={game.teams.home.team.abbreviation}
                  awayId={game.teams.away.team.id}
                  homeId={game.teams.home.team.id}
                  awayScore={game.teams.away.score}
                  homeScore={game.teams.home.score}
                  currentPeriodOrdinal={game.linescore.currentPeriodOrdinal}
                  currentPeriodTimeRemaining={game.linescore.currentPeriodTimeRemaining}
                  codedGameState={Number(game.status.codedGameState)}
                  seriesStatusShort={game.seriesSummary ? game.seriesSummary.seriesStatusShort : ''}
                  gameLabel={game.seriesSummary ? game.seriesSummary.gameLabel : ''}
                  gameDate={game.gameDate}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

    );
  }
}

export default Teams;
