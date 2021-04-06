import createAxios from '../utils/createAxios';
import esc from '../utils/urlStringEscape';

// NOTE: offset and limit query parameters can be appended to the urls below for fetching more data
export const AirlineService = getAxios => ({
  getAllAircrafts: () => getAxios().get(esc`/aircrafts`),
  getAircraftById: id => getAxios().get(esc`/aircrafts/${id}`),
  getAllFlights: () => getAxios().get(esc`/flights`),
  getFlightById: id => getAxios().get(esc`/flights/${id}`)
});

export default config => () => AirlineService(() => createAxios(config.airlineUrl));
