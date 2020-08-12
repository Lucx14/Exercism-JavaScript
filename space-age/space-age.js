const SECONDS_IN_YEAR = 31557600;
const MERCURY_ORBIT = 0.2408467;
const VENUS_ORBIT = 0.61519726;
const MARS_ORBIT = 1.8808158;
const JUPITER_ORBIT = 11.862615;
const SATURN_ORBIT = 29.447498;
const URANUS_ORBIT = 84.016846;
const NEPTUNE_ORBIT = 164.79132;
const DECIMAL_PLACES = 2;

const calculateAgeFromSeconds = seconds => seconds / SECONDS_IN_YEAR;
const round = (value, decimals) => {
  return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals);
};

export const age = (planet, seconds) => {
  const earth_age = calculateAgeFromSeconds(seconds);

  switch(planet) {
    case 'earth': return round(earth_age, DECIMAL_PLACES);
    case 'mercury': return round((earth_age / MERCURY_ORBIT), DECIMAL_PLACES);
    case 'venus': return round((earth_age / VENUS_ORBIT), DECIMAL_PLACES);
    case 'mars': return round((earth_age / MARS_ORBIT), DECIMAL_PLACES);
    case 'jupiter': return round((earth_age / JUPITER_ORBIT), DECIMAL_PLACES);
    case 'saturn': return round((earth_age / SATURN_ORBIT), DECIMAL_PLACES);
    case 'uranus': return round((earth_age / URANUS_ORBIT), DECIMAL_PLACES);
    case 'neptune': return round((earth_age / NEPTUNE_ORBIT), DECIMAL_PLACES);
    default: 
      throw new Error('Input error');
  };
};
