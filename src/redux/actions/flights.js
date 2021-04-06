const PREFIX = 'FLIGHTS';

export const LOADING_ALL_FLIGHTS = `${PREFIX}/LOADING_ALL_FLIGHTS`;
export const LOADED_ALL_FLIGHTS = `${PREFIX}/LOADED_ALL_FLIGHTS`;

/*------------------------- load aircraft data by id -----------------------------*/
export const loadingAllFlights = {
  type: LOADING_ALL_FLIGHTS
};

export const loadedAllFlights = flightList => ({
  type: LOADED_ALL_FLIGHTS,
  flightList
});

export const getAllFlights = aircraftId => async (dispatch, getState, { AirlineService }) => {
  try {
    dispatch(loadingAllFlights);
    const res = await dispatch(AirlineService).getAllFlights(aircraftId);
    const flightList = res?.data?.data;
    dispatch(loadedAllFlights(flightList));
    console.log('All flights: ', flightList);
  } catch (err) {
    console.log('Error loading all flights: ', err);
  }
};

export const getFlightById = flightId => async (dispatch, getState, { AirlineService }) => {
  try {
    const res = await dispatch(AirlineService).getFlightById(flightId);
    const data = res?.data?.data;
    console.log('Flight data by Id: ', data);
    // if needed, dispatch actions to store data in Redux
    return data;
  } catch (err) {
    console.log('Error loading flight by Id: ', err);
  }
};
