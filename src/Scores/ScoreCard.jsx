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
    powerPlay: PropTypes.bool,
    powerPlayAway: PropTypes.bool,
    powerPlayHome: PropTypes.bool,
  };

  ScoreCard.defaultProps = {
    currentPeriodOrdinal: '1st',
    currentPeriodTimeRemaining: '20:00',
    powerPlay: false,
    powerPlayAway: false,
    powerPlayHome: false,
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
    powerPlay,
    powerPlayAway,
    powerPlayHome,
  } = props;

  function gameStateClass() {
    if (codedGameState === 1 || codedGameState === 8) {
      return 'state-scheduled';
    } if (codedGameState > 1) {
      if (codedGameState < 7) {
        return powerPlay ? 'state-powerplay' : 'state-inprogress';
      }
      return 'state-final';
    }
    return '';
  }

  function losingTeamClass(scoreA, scoreB) {
    if (gameStateClass() === 'state-final') {
      return scoreA < scoreB ? 'losing-team' : '';
    }
    return '';
  }

  function gameTimeClass() {
    if (gameStateClass() === 'state-inprogress' || gameStateClass() === 'state-powerplay') {
      return powerPlay ? 'text-danger' : 'text-success';
    }
    return 'text-black';
  }

  // Scheduled
  return (
    <div className="card text-black bg-secondary p-2 text-center">
      <div className="container">

        {/* Series Information */}
        <div className="row row-cols-2 align-items-center mb-2 text-muted">
          <div className="col col-6">
            {gameLabel}
          </div>
          <div className="col col-6">
            {seriesStatusShort}
          </div>
        </div>

        <div className="row row-cols-2 align-items-center mb-2">

          <div className={`col col-6 ${gameStateClass()}`}>
            {/* Team information and scores */}
            <div className="row row-cols-3">

              {/* Team logos */}
              <div className="col col-4">
                <div className="row">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${awayId}.svg`}
                    className="card-img-top img-fluid"
                    alt={awayAbbr}
                  />
                </div>
                <div className="row">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${homeId}.svg`}
                    className="card-img-top img-fluid"
                    alt={homeAbbr}
                  />
                </div>
              </div>

              {/* Team abbreviations */}
              <div className="col col-3 mr-2 h5">
                <div className={`row ${losingTeamClass(awayScore, homeScore)}`}>
                  {awayAbbr}
                </div>
                <div className={`row ${losingTeamClass(homeScore, awayScore)}`}>
                  {homeAbbr}
                </div>
              </div>

              <div className="col col-2 mr-1 h5">
                <div className="row power-play">
                  {powerPlayAway ? ' PP' : ''}
                </div>
                <div className="row power-play">
                  {powerPlayHome ? ' PP' : ''}
                </div>
              </div>

              {/* Scores */}
              <div className="col col-2 h5">
                <div className={`row ${losingTeamClass(awayScore, homeScore)}`}>
                  {awayScore}
                </div>
                <div className={`row ${losingTeamClass(homeScore, awayScore)}`}>
                  {homeScore}
                </div>
              </div>

            </div>
          </div>

          <div className="col col-6">
            {/* Schedule and game progress information */}
            <div
              className={`h6 ${gameTimeClass()}`}
            >
              {gameStateClass() === 'state-scheduled'
                ? `${moment.tz(gameDate, 'America/New_York').format('HH:mm')} ET`
                : `${currentPeriodOrdinal} - ${currentPeriodTimeRemaining}`}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
