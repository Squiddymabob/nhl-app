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
    currentPeriodOrdinal: '',
    currentPeriodTimeRemaining: '',
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

  function gameStateClass(gameState) {
    if (gameState === 1) {
      return 'state-scheduled';
    } if (gameState === 8) {
      return 'state-scheduled-tbd';
    } if (gameState > 1) {
      if (gameState < 7) {
        return 'state-inprogress';
      }
      return 'state-final';
    }
    return '';
  }

  function losingTeamClass(scoreA, scoreB) {
    if (gameStateClass(codedGameState) === 'state-final') {
      return scoreA < scoreB ? 'losing-team' : '';
    }
    return '';
  }

  // Scheduled
  return (
    <div className="card text-black bg-secondary p-2 text-center">
      <div className="container">
        <div className="row row-cols-2 align-items-center">

          <div className={`col col-6 ${gameStateClass(codedGameState)}`}>

            {/* Team information */}
            <div className="row row-cols-3 align-items-center">
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
              <div className="col col-4 h5">
                <div className={`row ${losingTeamClass(awayScore, homeScore)}`}>
                  {awayAbbr}
                </div>
                <div className={`row ${losingTeamClass(homeScore, awayScore)}`}>
                  {homeAbbr}
                </div>
              </div>
              <div className="col col-4 h5">
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

            {/* Score/schedule information */}
            <div className="row row-cols-3 align-items-center">
              <div className="col col-4"> 1 </div>
              <div className="col col-4"> 2 </div>
              <div className="col col-4"> 3 </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
