import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

const ScoreCard = (props) => {
  ScoreCard.propTypes = {
    awayAbbr: PropTypes.string.isRequired,
    homeAbbr: PropTypes.string.isRequired,
    awayId: PropTypes.number.isRequired,
    homeId: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired,
    homeScore: PropTypes.number.isRequired,
    currentPeriodOrdinal: PropTypes.string,
    currentPeriodTimeRemaining: PropTypes.string,
    codedGameState: PropTypes.number.isRequired,
    seriesStatusShort: PropTypes.string.isRequired,
    gameLabel: PropTypes.string.isRequired,
    gameDate: PropTypes.string.isRequired,
    darkThemeEnabled: PropTypes.bool.isRequired,
  };

  ScoreCard.defaultProps = {
    currentPeriodOrdinal: '',
    currentPeriodTimeRemaining: '',
  };

  const {
    awayAbbr,
    homeAbbr,
    awayId,
    homeId,
    awayScore,
    homeScore,
    currentPeriodOrdinal,
    currentPeriodTimeRemaining,
    codedGameState,
    seriesStatusShort,
    gameLabel,
    gameDate,
    darkThemeEnabled
  } = props;

  function awayWins(away, home) {
    return away > home;
  }

  // Scheduled
  if (codedGameState === 1) {
    return (
      <div className={`card p-2 text-center ${darkThemeEnabled ? 'text-white bg-primary' : 'text-black bg-secondary'}`}>
        <div className="container">

          {/* Series Information */}
          <div className="row row-cols-2 align-items-center">
            <div className="col col-6">
              {seriesStatusShort}
            </div>
            <div className="col col-6">
              {gameLabel}
            </div>
          </div>

          {/* Team Information */}
          <div className="row row-cols-2 align-items-center p-2">
            <div className="col col-6">

              {/* Away Team */}
              <div className="row row-cols-3 align-items-center pb-2">
                <div className="col col-4">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${awayId}.svg`}
                    className="card-img-top img-fluid"
                    alt={awayAbbr}
                  />
                </div>
                <div className="col col-5 h5 mb-0">
                  {awayAbbr}
                </div>
              </div>

              {/* Home Team */}
              <div className="row row-cols-3 align-items-center">
                <div className="col col-4">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${homeId}.svg`}
                    className="card-img-top img-fluid"
                    alt={homeAbbr}
                  />
                </div>
                <div className="col col-5 h5 mb-0">
                  {homeAbbr}
                </div>
              </div>

            </div>

            {/* Scheduled Information */}
            <div className="col col-6">
              <div className="row">
                <div className="col center-block text-center h6 mb-0">
                  {moment.tz(gameDate, 'America/New_York').format('HH:mm')}
                  {' '}
                  ET
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
  // Scheduled - TBD
  if (codedGameState === 8) {
    return (
      <div className={`card p-2 text-center ${darkThemeEnabled ? 'text-white bg-primary' : 'text-black bg-secondary'}`}>
        <div className="container">

          {/* Series Information */}
          <div className="row row-cols-2 align-items-center">
            <div className="col col-6">
              {seriesStatusShort}
            </div>
            <div className="col col-6">
              {gameLabel}
            </div>
          </div>

          {/* Team Information */}
          <div className="row row-cols-2 align-items-center p-2">
            <div className="col col-6">

              {/* Away Team */}
              <div className="row row-cols-3 align-items-center pb-2">
                <div className="col col-4">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-${darkThemeEnabled ? 'dark' : 'light'}/${awayId}.svg`}
                    className="card-img-top img-fluid"
                    alt={awayAbbr}
                  />
                </div>
                <div className="col col-5 h5 mb-0">
                  {awayAbbr}
                </div>
              </div>

              {/* Home Team */}
              <div className="row row-cols-3 align-items-center">
                <div className="col col-4">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-${darkThemeEnabled ? 'dark' : 'light'}/${homeId}.svg`}
                    className="card-img-top img-fluid"
                    alt={homeAbbr}
                  />
                </div>
                <div className="col col-5 h5 mb-0">
                  {homeAbbr}
                </div>
              </div>

            </div>

            <div className="col col-6 h6 mb-0">
              TBD
            </div>

          </div>

        </div>
      </div>
    );
  }
  // Final or in progress
  if (codedGameState > 1) {
    // In progress
    if (codedGameState < 7) {
      return (
        <div className="card text-black bg-in-progress bg-gradient p-2 text-center border-info">
          <div className="container">

            {/* Series Information */}
            <div className="row row-cols-2 align-items-center">
              <div className="col col-6">
                {seriesStatusShort}
              </div>
              <div className="col col-6">
                {gameLabel}
              </div>
            </div>

            {/* Team Information */}
            <div className="row row-cols-2 align-items-center p-2">
              <div className="col col-6">

                {/* Away Team */}
                <div className="row row-cols-3 align-items-center pb-2">
                  <div className="col col-4">
                    <img
                      src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-${darkThemeEnabled ? 'dark' : 'light'}/${awayId}.svg`}
                      className="card-img-top img-fluid"
                      alt={awayAbbr}
                    />
                  </div>
                  <div className="col col-5 h5 mb-0">
                    {awayAbbr}
                  </div>
                  <div className="col col-3 h5 mb-0">
                    {awayScore}
                  </div>
                </div>

                {/* Home Team */}
                <div className="row row-cols-3 align-items-center">
                  <div className="col col-4">
                    <img
                      src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-${darkThemeEnabled ? 'dark' : 'light'}/${homeId}.svg`}
                      className="card-img-top img-fluid"
                      alt={homeAbbr}
                    />
                  </div>
                  <div className="col col-5 h5 mb-0">
                    {homeAbbr}
                  </div>
                  <div className="col col-3 h5 mb-0">
                    {homeScore}
                  </div>
                </div>

              </div>

              {/* Current In Progress Information */}
              <div className="col col-6">
                <div className="row">
                  <div className="col center-block text-center h6 mb-1">
                    {currentPeriodOrdinal}
                  </div>
                </div>

                <div className="row">
                  <div className="col center-block text-center h6 mb-0 mt-1 text-info">
                    {currentPeriodTimeRemaining}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      );
    }
    // Final
    return (
      <div className={`card p-2 text-center ${darkThemeEnabled ? 'text-white bg-primary' : 'text-black bg-secondary'}`}>
        <div className="container">

          {/* Series Information */}
          <div className="row row-cols-2 align-items-center">
            <div className="col col-6">
              {seriesStatusShort}
            </div>
            <div className="col col-6">
              {gameLabel}
            </div>
          </div>

          {/* Team Information */}
          <div className="row row-cols-2 align-items-center p-2">
            <div className="col col-6">

              {/* Away Team */}
              <div className="row row-cols-3 align-items-center pb-2">
                <div className="col col-4">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-${darkThemeEnabled ? 'dark' : 'light'}/${awayId}.svg`}
                    className="card-img-top img-fluid"
                    alt={awayAbbr}
                  />
                </div>
                <div className="col col-5 h5 mb-0">
                  <span className={awayWins(awayScore, homeScore) ? '' : 'losing-team'}>
                    {awayAbbr}
                  </span>
                </div>
                <div className="col col-3 h5 mb-0">
                  <span className={awayWins(awayScore, homeScore) ? '' : 'losing-team'}>
                    {awayScore}
                  </span>
                </div>
              </div>

              {/* Home Team */}
              <div className="row row-cols-3 align-items-center">
                <div className="col col-4">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-${darkThemeEnabled ? 'dark' : 'light'}/${homeId}.svg`}
                    className="card-img-top img-fluid"
                    alt={homeAbbr}
                  />
                </div>
                <div className="col col-5 h5 mb-0">
                  <span className={awayWins(awayScore, homeScore) ? 'losing-team' : ''}>
                    {homeAbbr}
                  </span>
                </div>
                <div className="col col-3 h5 mb-0">
                  <span className={awayWins(awayScore, homeScore) ? 'losing-team' : ''}>
                    {homeScore}
                  </span>
                </div>
              </div>

            </div>

            <div className="col col-6 h6 mb-0">
              FINAL
            </div>

          </div>

        </div>
      </div>
    );
  }
  // If no information is available, display this instead
  return (
    <div>Error</div>
  );
};

export default ScoreCard;