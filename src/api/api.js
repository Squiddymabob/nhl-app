const axios = require('axios');

const apiUrl = '/site/api';

const headers = {};

const franchisesUrl = '/franchise?include=teams.id&include=teams.active&include=teams.triCode&include=teams.placeName&include=teams.commonName&include=teams.fullName&include=teams.logos&include=teams.conference.name&include=teams.division.name&include=teams.franchiseTeam.firstSeason.id&include=teams.franchiseTeam.lastSeason.id&include=teams.franchiseTeam.teamCommonName';

export function getFranchises() {
  // Using the headers, fetch data from a url endpoint
  return axios.get(`${apiUrl}${franchisesUrl}`, { headers }).then(
    (res) => res.data.data,
  ).catch((err) => {
    console.error(err);
  });
}

export function getAccountHolder() {
  // Using the headers, fetch data from a url endpoint
  return axios.get(`${apiUrl}/account-holder/name`, { headers }).then(
    (res) => res.data.accountHolderName,
  ).catch((err) => {
    console.error(err);
  });
}
