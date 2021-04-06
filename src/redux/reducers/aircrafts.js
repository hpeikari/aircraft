import createReducer from '../../utils/createReducer';
import {
  LOADING_ALL_AIRCRAFTS_DATA,
  LOADED_ALL_AIRCRAFTS_DATA,
  LOADING_AIRCRAFT_DATA_BY_ID,
  LOADED_AIRCRAFT_DATA_BY_ID,
  SET_DATE_INDEX
} from '../actions/aircrafts';

export const defaultState = {
  dateIndex: 0,
  aircraftList: []
};

export default createReducer(defaultState, (state, action) => ({
  [SET_DATE_INDEX]: () => ({
    ...state,
    dateIndex: action.index
  }),
  [LOADING_ALL_AIRCRAFTS_DATA]: () => ({
    ...state,
    isAircraftListLoaded: false
  }),
  [LOADED_ALL_AIRCRAFTS_DATA]: () => ({
    ...state,
    isAircraftListLoaded: true,
    aircraftList: action.aircraftList
  }),
  [LOADING_AIRCRAFT_DATA_BY_ID]: () => ({
    ...state,
    selectedAircraft: ''
  }),
  [LOADED_AIRCRAFT_DATA_BY_ID]: () => ({
    ...state,
    selectedAircraft: action.aircraftIdent,
    selectedAircraftData: action.aircraftData
  })
}));
