//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NB_PRECISION = 2;
const SECONDS_IN_YEAR_EARTH = 31557600;

const ORBITAL_IN_EARTH_YEAR = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1.0,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132,
};

export const age = (planet, seconds) => {
  if (!ORBITAL_IN_EARTH_YEAR.hasOwnProperty(planet)) {
    throw new Error("not a planet");
  }
  
  const agePlanet = seconds / (ORBITAL_IN_EARTH_YEAR[planet.toLowerCase()] * SECONDS_IN_YEAR_EARTH);
  return Math.round(agePlanet * 100) / 100;
};
