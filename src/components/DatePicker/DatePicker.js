import { func, object, bool, string } from 'prop-types';
import DatePicker from 'react-widgets/DatePicker';
import styles from './DatePicker.scss';

const Calendar = props => (
  <div className={styles.wrapper} title={props.title}>
    <DatePicker
      placeholder='m/dd/yy'
      disabled={props.isDisabled}
      defaultValue={new Date()}
      min={props.min}
      max={props.max}
      onChange={value => props.onChange(value)}
    />
  </div>
);

Calendar.propTypes = {
  title: string.isRequired,
  isDisabled: bool.isRequired,
  min: object.isRequired,
  max: object.isRequired,
  onChange: func.isRequired
};

export default Calendar;
