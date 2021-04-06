import {
  LOADING_ALL_AIRCRAFTS_DATA,
  LOADED_ALL_AIRCRAFTS_DATA,
  LOADING_AIRCRAFT_DATA_BY_ID,
  LOADED_AIRCRAFT_DATA_BY_ID,
  SET_DATE_INDEX
} from '../actions/aircrafts';
import reducer, { defaultState } from './aircrafts';

describe('Aircrafts Reducer', () => {
  it('should return the default state', () => {
    const dummyAction = { type: 'NON_EXISTENT' };
    expect(reducer(defaultState, dummyAction)).toEqual(defaultState);
  });

  describe(SET_DATE_INDEX, () => {
    it('should set dateIndex value', () => {
      const initialState = {
        dateIndex: 0
      };
      const action = {
        type: SET_DATE_INDEX,
        index: 2
      };
      const expectedState = {
        dateIndex: 2
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(expectedState);
    });
  });

  describe(LOADING_ALL_AIRCRAFTS_DATA, () => {
    it('should set isAircraftListLoaded flag to false', () => {
      const initialState = {
        isAircraftListLoaded: null
      };
      const action = {
        type: LOADING_ALL_AIRCRAFTS_DATA
      };
      const expectedState = {
        isAircraftListLoaded: false
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(expectedState);
    });
  });

  describe(LOADED_ALL_AIRCRAFTS_DATA, () => {
    it('should set isAircraftListLoaded flag and aircraftList array', () => {
      const initialState = {
        isAircraftListLoaded: null
      };
      const action = {
        type: LOADED_ALL_AIRCRAFTS_DATA,
        aircraftList: [{ 1: 'aircraft1' }, { 2: 'aircraft2' }]
      };
      const expectedState = {
        isAircraftListLoaded: true,
        aircraftList: [{ 1: 'aircraft1' }, { 2: 'aircraft2' }]
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(expectedState);
    });
  });

  describe(LOADING_AIRCRAFT_DATA_BY_ID, () => {
    it('should set selectedAircraft to empty string', () => {
      const initialState = {
        selectedAircraft: 'ABCDE'
      };
      const action = {
        type: LOADING_AIRCRAFT_DATA_BY_ID
      };
      const expectedState = {
        selectedAircraft: ''
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(expectedState);
    });
  });

  describe(LOADED_AIRCRAFT_DATA_BY_ID, () => {
    it('should set selectedAircraft to an aircraft id', () => {
      const initialState = {
        selectedAircraft: ''
      };
      const action = {
        type: LOADED_AIRCRAFT_DATA_BY_ID,
        aircraftIdent: 'ABCDE',
        aircraftData: { seats: 200 }
      };
      const expectedState = {
        selectedAircraft: 'ABCDE',
        selectedAircraftData: { seats: 200 }
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(expectedState);
    });
  });
});
