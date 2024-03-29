import React from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import { getGames } from '../../api/api';
import ScoreCard from './ScoreCard';

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      dates: [],
    };
  }

  componentDidMount() {
    this.fetchGames();
    this.setState({ isLoaded: true });
    // Refresh score data
    this.timer = setInterval(() => this.fetchGames(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  /**
   * Get the latest game data from 3 days ago until 3 days from now
   *
   * @memberof Scores
   */
  fetchGames() {
    const startDate = moment().subtract(3, 'days').format('YYYY-MM-DD');
    const endDate = moment().add(3, 'days').format('YYYY-MM-DD');
    getGames(startDate, endDate).then((response) => {
      const dates = response.dates || [];
      this.setState({ dates });
    });
  }

  render() {
    const { isLoaded, dates } = this.state;
    const { darkThemeEnabled } = this.props;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container mt-4">
        <div className="row mt-2 mb-2">
          {/* For each date, show the games on that date */}
          {dates.map((date) => (
            <div className="col-4 mt-2 mb-2 score-card-container">
              <div className="card text-white bg-info font-weight-bold p-2">
                {moment.tz(date.date, 'America/New_York').format('D MMM')}
              </div>

              {date.games.map((game) => (
                // Show a score card component for each game on a date
                <div className="mt-2 mb-2">
                  <ScoreCard
                    awayAbbr={game.teams.away.team.abbreviation}
                    homeAbbr={game.teams.home.team.abbreviation}
                    awayId={game.teams.away.team.id}
                    homeId={game.teams.home.team.id}
                    awayScore={game.teams.away.score}
                    homeScore={game.teams.home.score}
                    currentPeriodOrdinal={game.linescore.currentPeriodOrdinal || '1st'}
                    currentPeriodTimeRemaining={game.linescore.currentPeriodTimeRemaining || '20:00'}
                    codedGameState={Number(game.status.codedGameState)}
                    seriesStatusShort={game.seriesSummary ? game.seriesSummary.seriesStatusShort : ''}
                    gameLabel={game.seriesSummary ? game.seriesSummary.gameLabel : ''}
                    gameDate={game.gameDate}
                    powerPlay={game.linescore.powerPlayInfo ? game.linescore.powerPlayInfo.inSituation : ''}
                    powerPlayAway={game.linescore.teams.away.powerPlay}
                    powerPlayHome={game.linescore.teams.home.powerPlay}
                    darkThemeEnabled={darkThemeEnabled}
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

Scores.propTypes = {
  darkThemeEnabled: PropTypes.bool.isRequired,
};

export default Scores;
