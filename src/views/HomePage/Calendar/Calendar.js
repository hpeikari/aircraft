import { func, number, bool } from 'prop-types';
import { useTranslation } from 'react-i18next';
import DatePicker from '../../../components/DatePicker/DatePicker';

const Calendar = props => {
  const { t } = useTranslation('common');
  const today = new Date();
  const maxDay = new Date();
  // you can only check the schedule for today and the next N days
  // N is the number of grouped rotations available in redux
  maxDay.setDate(maxDay.getDate() + props.numAvailableRotations);

  return (
    <DatePicker
      isDisabled={props.isDisabled}
      title={props.isDisabled ? t('selectAnAircraft') : ''}
      onChange={value => props.setDateIndex(value.getDate() - today.getDate())}
      min={today}
      max={maxDay}
    />
  );
};

Calendar.propTypes = {
  numAvailableRotations: number.isRequired,
  isDisabled: bool.isRequired,
  setDateIndex: func.isRequired
};

export default Calendar;
