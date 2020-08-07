import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

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
    codedGameState: PropTypes.number.isRequired,
    seriesStatusShort: PropTypes.string.isRequired,
    gameLabel: PropTypes.string.isRequired,
    gameDate: PropTypes.string.isRequired,
    broadcasts: PropTypes.string.isRequired,
  };
  //   ScoreCard.defaultProps = {
  //     accountUid: null,
  //   };
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
    broadcasts,
  } = props;

  // Scheduled
  if (codedGameState === 1) {
    return (
      <div className="card m-4 text-black bg-secondary">
        <div className="container">

          {/* Series Information */}
          <div className="row row-cols-2 align-items-center">
            <div className="col">
              {seriesStatusShort}
            </div>
            <div className="col">
              {gameLabel}
            </div>
          </div>

          {/* Team Information */}
          <div className="row row-cols-2 align-items-center">
            <div className="col">

              {/* Away Team */}
              <div className="row row-cols-3 align-items-center">
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
              </div>

              {/* Home Team */}
              <div className="row row-cols-3 align-items-center">
                <div className="col">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${homeId}.svg`}
                    className="card-img-top img-fluid"
                    alt={homeAbbr}
                  />
                </div>
                <div className="col">
                  {homeAbbr}
                </div>
              </div>

            </div>

            {/* Scheduled Information */}
            <div className="col">
              <div className="row">
                <div className="col center-block text-center">
                  {moment.tz(gameDate, 'America/New_York').format('HH:mm')}
                  {' '}
                  ET
                </div>
              </div>
              <div className="row">
                <div className="col center-block text-center">
                  {broadcasts}
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
      <div className="card m-4 text-black bg-secondary">
        <div className="container">

          {/* Series Information */}
          <div className="row row-cols-2 align-items-center">
            <div className="col">
              {seriesStatusShort}
            </div>
            <div className="col">
              {gameLabel}
            </div>
          </div>

          {/* Team Information */}
          <div className="row row-cols-2 align-items-center">
            <div className="col">

              {/* Away Team */}
              <div className="row row-cols-3 align-items-center">
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
              </div>

              {/* Home Team */}
              <div className="row row-cols-3 align-items-center">
                <div className="col">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${homeId}.svg`}
                    className="card-img-top img-fluid"
                    alt={homeAbbr}
                  />
                </div>
                <div className="col">
                  {homeAbbr}
                </div>
              </div>

            </div>

            <div className="col">
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
        <div className="card m-4 text-black bg-secondary">
          <div className="container">
            {/* Current scores */}
            <div className="row row-cols-4 align-items-center">
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
            <div className="row row-cols-4 align-items-center">
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
        </div>
      );
    }
    // Final
    return (
      <div className="card m-4 text-black bg-secondary">
        <div className="container">

          {/* Series Information */}
          <div className="row row-cols-2 align-items-center">
            <div className="col">
              {seriesStatusShort}
            </div>
            <div className="col">
              {gameLabel}
            </div>
          </div>

          {/* Team Information */}
          <div className="row row-cols-2 align-items-center">
            <div className="col">

              {/* Away Team */}
              <div className="row row-cols-3 align-items-center">
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
                <div className="col">
                  {awayScore}
                </div>
              </div>

              {/* Home Team */}
              <div className="row row-cols-3 align-items-center">
                <div className="col">
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${homeId}.svg`}
                    className="card-img-top img-fluid"
                    alt={homeAbbr}
                  />
                </div>
                <div className="col">
                  {homeAbbr}
                </div>
                <div className="col">
                  {homeScore}
                </div>
              </div>

            </div>

            <div className="col">
              FINAL
            </div>

          </div>

        </div>
      </div>
    );
  }
  // If no information is available, display this instead
  return (
    <div>d</div>
  );
};

export default ScoreCard;
