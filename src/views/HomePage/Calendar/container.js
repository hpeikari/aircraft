import { connect } from 'react-redux';
import { setDateIndex } from '../../../redux/actions/aircrafts';
import { deriveDailyFlightRotation } from '../../../redux/selectors/flights';
import Calendar from './Calendar';

const mapStateToProps = state => ({
  isDisabled: !state.aircrafts.selectedAircraft,
  numAvailableRotations: deriveDailyFlightRotation(state).length - 1
});

const mapDispatchToProps = dispatch => ({
  setDateIndex: index => dispatch(setDateIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
