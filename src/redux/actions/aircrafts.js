const PREFIX = 'AIRCRAFTS';

export const LOADING_ALL_AIRCRAFTS_DATA = `${PREFIX}/LOADING_ALL_AIRCRAFTS_DATA`;
export const LOADED_ALL_AIRCRAFTS_DATA = `${PREFIX}/LOADED_ALL_AIRCRAFTS_DATA`;

export const LOADING_AIRCRAFT_DATA_BY_ID = `${PREFIX}/LOADING_AIRCRAFT_DATA_BY_ID`;
export const LOADED_AIRCRAFT_DATA_BY_ID = `${PREFIX}/LOADED_AIRCRAFT_DATA_BY_ID`;

export const SET_DATE_INDEX = `${PREFIX}/SET_DATE_INDEX`;

export const setDateIndex = index => ({
  type: SET_DATE_INDEX,
  index
});

/*------------------------- load all aircrafts data -----------------------------*/
export const loadingAllAircraftsData = {
  type: LOADING_ALL_AIRCRAFTS_DATA
};

export const loadedAllAircraftsData = aircraftList => ({
  type: LOADED_ALL_AIRCRAFTS_DATA,
  aircraftList
});

export const getAllAircrafts = () => async (dispatch, getState, { AirlineService }) => {
  try {
    dispatch(loadingAllAircraftsData);
    const res = await dispatch(AirlineService).getAllAircrafts();
    const aircraftList = res?.data?.data;
    console.log('All aircrafts: ', aircraftList);
    dispatch(loadedAllAircraftsData(aircraftList));
  } catch (err) {
    console.log('Error loading all aircrafts: ', err);
  }
};

/*------------------------- load aircraft data by id -----------------------------*/
export const loadingAircraftDataById = {
  type: LOADING_AIRCRAFT_DATA_BY_ID
};

export const loadedAircraftDataById = ({ aircraftIdent, aircraftData }) => ({
  type: LOADED_AIRCRAFT_DATA_BY_ID,
  aircraftIdent,
  aircraftData
});

export const getAircraftById = id => async (dispatch, getState, { AirlineService }) => {
  // let's first see if we already have the data before making an API request
  const aircraftData = getState().aircrafts?.aircraftList?.filter(({ ident }) => id === ident);
  if (!!aircraftData.length) {
    dispatch(loadedAircraftDataById({ aircraftIdent: aircraftData[0].ident, aircraftData: aircraftData[0] }));
    console.log('Aircraft data by Id: ', aircraftData);
    return;
  }

  // seems like we don't have the data in redux, so let's make an API call
  try {
    dispatch(loadingAircraftDataById);
    const res = await dispatch(AirlineService).getAircraftById(id);
    const data = res?.data?.data;
    console.log('Aircraft data by Id: ', data);
    dispatch(loadedAircraftDataById({ aircraftIdent: data?.ident, aircraftData: data }));
    // NOTE: we can send another API request here to fetch all flights by this aircraft.
    // But it's better to delegate that to the component that needs this data.
  } catch (err) {
    console.log('Error loading aircraft data by Id: ', err);
  }
};
