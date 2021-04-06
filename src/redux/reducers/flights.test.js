import { LOADING_ALL_FLIGHTS, LOADED_ALL_FLIGHTS } from '../actions/flights';
import reducer from './flights';

describe('Flights reducer', () => {
  it('should return the default state', () => {
    const dummyAction = { type: 'NONEXISTENT' };
    expect(typeof reducer(undefined, dummyAction)).toEqual('object');
  });

  describe(LOADING_ALL_FLIGHTS, () => {
    it('should set isFlightListLoading flag to true', () => {
      const initialState = {
        isFlightListLoading: null
      };
      const action = {
        type: LOADING_ALL_FLIGHTS
      };
      const expectedState = {
        isFlightListLoading: true
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(expectedState);
    });
  });

  describe(LOADED_ALL_FLIGHTS, () => {
    it('should set isFlightListLoading flag to false and flightList array', () => {
      const initialState = {
        isFlightListLoading: true
      };
      const action = {
        type: LOADED_ALL_FLIGHTS,
        flightList: [{ 1: 'fligh1' }, { 2: 'fligh2' }]
      };
      const expectedState = {
        isFlightListLoading: false,
        flightList: [{ 1: 'fligh1' }, { 2: 'fligh2' }]
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(expectedState);
    });
  });
});
