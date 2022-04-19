const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  const results = await response.json();
  return results;
}

export const fetchCountryByRegion = async (region) => {
  const response = await fetch(`${BASE_URL}/region/${region}`);
  const results = await response.json();
  return results;
}

export const fetchCountryByCode = async (code) => {
  const response = await fetch(`${BASE_URL}/alpha/${code}`);
  const results = await response.json();
  return results;
}
