/**
 * Filter the franchises to those who are active
 *
 * @export
 * @param {Array} franchises
 * @returns An array of active franchises
 */
export function getActiveFranchises(franchises) {
  return franchises.filter((franchise) => franchise.lastSeasonId === null);
}

/**
 * Filter the franchise's teams to those who are active
 *
 * @export
 * @param {Object} franchise
 * @returns An array of active teams for a franchise
 */
export function getActiveTeams(franchise) {
  return franchise.teams.filter((team) => team.active === 'Y');
}
