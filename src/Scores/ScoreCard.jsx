import React from 'react';
import PropTypes from 'prop-types';

const ScoreCard = (props) => {
  ScoreCard.propTypes = {
    awayAbbr: PropTypes.string.isRequired,
    homeAbbr: PropTypes.string.isRequired,
    awayId: PropTypes.string.isRequired,
    homeId: PropTypes.string.isRequired,
    awayScore: PropTypes.number.isRequired,
    homeScore: PropTypes.number.isRequired,
    currentPeriodOrdinal: PropTypes.string.isRequired,
    currentPeriodTimeRemaining: PropTypes.string.isRequired,
  };
  //   ScoreCard.defaultProps = {
  //     accountUid: null,
  //   };
  const {
    awayAbbr, homeAbbr, awayId, homeId, awayScore, homeScore, currentPeriodOrdinal, currentPeriodTimeRemaining,
  } = props;
    // Show savings goal information
  if (currentPeriodTimeRemaining) {
    return (
      <div>
        <div className="row row-cols-4">
          <div className="col">
            <img
              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${awayId}.svg`}
              className="card-img-top img-fluid"
              alt={awayAbbr}
            />
          </div>
          <div className="col">
            {awayAbbr}
          </div>
          <div className="col">{awayScore}</div>
          <div className="col">
            {currentPeriodOrdinal}
          </div>
        </div>
        <div className="row row-cols-4">
          <div className="col">
            <img
              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${homeId}.svg`}
              className="card-img-top img-fluid"
              alt={homeAbbr}
            />
          </div>
          <div className="col">{homeAbbr}</div>
          <div className="col">{homeScore}</div>
          <div className="col">{currentPeriodTimeRemaining}</div>
        </div>
      </div>
    );
  }
  // Show account information
  //   if (accountUid) {
  //     return (
  //       <span className="text-left">
  //         e
  //       </span>
  //     );
  //   }
  // If no account information is available, display this instead
  return (
    <div>d</div>
  );
};

export default ScoreCard;
