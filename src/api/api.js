const axios = require('axios');
// const localScores = require('./responsesBackup/statsapi/scores.json');

// Any headers required for the request
const headers = {};

const franchisesUrl = '/franchise?include=teams.id&include=teams.active&include=teams.triCode'
+ '&include=teams.placeName&include=teams.commonName&include=teams.fullName'
+ '&include=teams.logos&include=teams.conference.name&include=teams.division.name'
+ '&include=teams.franchiseTeam.firstSeason.id&include=teams.franchiseTeam.lastSeason.id'
+ '&include=teams.franchiseTeam.teamCommonName';

export function getFranchises() {
  // Using the headers, fetch data from a url endpoint
  return axios.get(`/site/api${franchisesUrl}`, { headers }).then(
    (res) => res.data.data,
  ).catch((err) => {
    console.error(err);
  });
}

/**
 * Based on the given team number, return an SVG of that team's logo
 * Team are numbered 1 - 54, e.g. 6 is the Boston Bruins
 *
 * @export
 * @param {Number} teamNumber
 * @returns a link to the SVG of the specified team's logo
 */
export function getTeamLogo(teamNumber) {
  return axios.get(`/images/logos/teams-current-primary-light/${teamNumber}.svg`, { headers }).then(
    (res) => res.data,
  ).catch((err) => {
    console.error(err);
  });
}

/**
 * Return data about current NHL teams
 *
 * @export
 * @returns object containing an array called teams of team information
 */
export function getCurrentTeams() {
  return axios.get('/api/v1/teams/', { headers }).then(
    (res) => res.data,
  ).catch((err) => {
    console.error(err);
  });
}

/**
 * Return data about the current NHL divisions
 *
 * @export
 * @returns object containing an array called divisions of division information
 */
export function getCurrentDivisions() {
  return axios.get('/api/v1/divisions/', { headers }).then(
    (res) => res.data,
  ).catch((err) => {
    console.error(err);
  });
}

/**
 * Returns data about games between the specified start and end dates
 *
 * @export
 * @param {String} startDate - Start of the period to return games for in the format 'yyyy-mm-dd'
 * @param {String} endDate - End of the period to return games for in the format 'yyyy-mm-dd'
 * @returns object containing an array of dates with available games for the time period
 */
export function getGames(startDate, endDate) {
  return axios.get(`/api/v1/schedule?startDate=${startDate}&endDate=${endDate}&hydrate=team,linescore,broadcasts(all),`
  + 'tickets,game(content(media(epg)),seriesSummary),radioBroadcasts,metadata,seriesSummary(series)'
  + '&site=en_nhl&teamId=&gameType=&timecode=', { headers }).then(
    (res) => res.data,
  ).catch((err) => {
    console.error(err);
  });
}
// export function getGames(startDate, endDate) {
//   const promise = new Promise(((resolve) => {
//     resolve(localScores);
//   }));
//   console.log(startDate, endDate);
//   return promise;
// }
