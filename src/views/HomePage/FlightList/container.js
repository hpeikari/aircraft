import { connect } from 'react-redux';
//import { getAllFlights, getFlightById } from '../../../redux/actions/flights';
import FlightList from './FlightList';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  //  getAllFlights: () => dispatch(getAllFlights()),
  //  getFlightById: id => dispatch(getFlightById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
