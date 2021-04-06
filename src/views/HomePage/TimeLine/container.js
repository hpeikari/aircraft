import { connect } from 'react-redux';
import { deriveDailyScheduledService } from '../../../redux/selectors/flights';
import { Timeline } from './Timeline';

const mapStateToProps = state => {
  const { timeline, totalScheduled } = deriveDailyScheduledService(state);
  return {
    totalScheduled,
    timeline
  };
};

export default connect(mapStateToProps)(Timeline);
