import { useEffect } from 'react';
import { object, bool, arrayOf } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { List } from '../../../components/List/List';
import styles from './FlightList.scss';

export const FlightList = props => {
  const { t } = useTranslation('common');
  useEffect(() => {
    //    props.getAllFlights();
    //    props.getFlightById('AS1234');
  }, []);

  return (
    <div className={styles.wrapper}>
      <List
        listTitle={t('flightList')}
        isDataLoaded={props.isDataLoaded || !!props.flighttList?.length || true}
        data={props.flighttList}
        onItemClick={() => {}}
      />
    </div>
  );
};

export default FlightList;

FlightList.propTypes = {
  isDataLoaded: bool.isRequired,
  flighttList: arrayOf(object)
};

FlightList.defaultProps = {
  flighttList: [],
  isDataLoaded: false
};
