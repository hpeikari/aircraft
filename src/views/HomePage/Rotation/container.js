import { connect } from 'react-redux';
import { getAllFlights } from '../../../redux/actions/flights';
import { deriveDailyFlightRotationByIndex } from '../../../redux/selectors/flights';
import Rotation from './Rotation';

const mapStateToProps = state => ({
  dateIndex: state.aircrafts.dateIndex,
  aircraftId: state.aircrafts.selectedAircraft,
  isLoading: state.flights.isFlightListLoading,
  dailyFlightList: deriveDailyFlightRotationByIndex(state)
});

const mapDispatchToProps = dispatch => ({
  getAllFlights: aircraftId => dispatch(getAllFlights(aircraftId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rotation);
