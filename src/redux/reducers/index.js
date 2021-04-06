import { combineReducers } from 'redux';
import aircrafts from './aircrafts';
import flights from './flights';
import '../../config';

export default combineReducers({
  aircrafts,
  flights
});
