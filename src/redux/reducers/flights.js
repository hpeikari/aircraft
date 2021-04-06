import createReducer from '../../utils/createReducer';
import { LOADING_ALL_FLIGHTS, LOADED_ALL_FLIGHTS } from '../actions/flights';

const defaultState = {
  flightList: []
};

export default createReducer(defaultState, (state, action) => ({
  [LOADING_ALL_FLIGHTS]: () => ({
    ...state,
    isFlightListLoading: true
  }),
  [LOADED_ALL_FLIGHTS]: () => ({
    ...state,
    isFlightListLoading: false,
    flightList: action.flightList
  })
}));
