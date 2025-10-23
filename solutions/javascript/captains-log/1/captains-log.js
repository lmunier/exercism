// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const MIN_INCL_NUMBER = 1000;
  const MAX_EXCL_NUMBER = 10000;

  const randomNumber = MIN_INCL_NUMBER + Math.floor(Math.random() * (MAX_EXCL_NUMBER - MIN_INCL_NUMBER));
  console.log(randomNumber);
  
  return `NCC-${randomNumber}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const MIN_INCL_NUMBER = 41000;
  const MAX_EXCL_NUMBER = 42000;

  return MIN_INCL_NUMBER + Math.random() * (MAX_EXCL_NUMBER - MIN_INCL_NUMBER);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const POSSIBLE_PLANETS = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  return POSSIBLE_PLANETS[Math.floor(Math.random() * POSSIBLE_PLANETS.length)];
}
