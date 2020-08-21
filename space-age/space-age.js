const SECONDS_IN_YEAR = 31557600;
const ORBIT = {
  'earth': 1,
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132
};
const DECIMAL_PLACES = 2;

const calculateAgeFromSeconds = seconds => seconds / SECONDS_IN_YEAR;
const round = (value, decimals) => {
  return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals);
};

export const age = (planet, seconds) => {
  const earth_age = calculateAgeFromSeconds(seconds);
  return round((earth_age / ORBIT[planet]), DECIMAL_PLACES);
};
