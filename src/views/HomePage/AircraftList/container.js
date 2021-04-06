import { connect } from 'react-redux';
import { getAllAircrafts, getAircraftById } from '../../../redux/actions/aircrafts';
import AircraftList from './AircraftList';

const mapStateToProps = ({ aircrafts }) => ({
  aircraftList: aircrafts.aircraftList,
  isDataLoaded: aircrafts.isAircraftListLoaded
});

const mapDispatchToProps = dispatch => ({
  getAllAircrafts: () => dispatch(getAllAircrafts()),
  getAircraftById: id => dispatch(getAircraftById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AircraftList);
