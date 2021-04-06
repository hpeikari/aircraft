import { useEffect } from 'react';
import { func, shape, number, bool, string, arrayOf } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { List } from '../../../components/List/List';
import styles from './AircraftList.scss';

export const AircraftList = props => {
  const { t } = useTranslation('common');
  useEffect(() => {
    props.getAllAircrafts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <List
        listTitle={t('aircraftList')}
        isDataLoaded={props.isDataLoaded}
        data={props.aircraftList}
        onItemClick={id => props.getAircraftById(id)}
      />
    </div>
  );
};

export default AircraftList;

AircraftList.propTypes = {
  getAllAircrafts: func.isRequired,
  getAircraftById: func.isRequired,
  isDataLoaded: bool.isRequired,
  aircraftList: arrayOf(
    shape({
      ident: string.isRequired,
      type: string.isRequired,
      economySeats: number.isRequired
    })
  ).isRequired
};

AircraftList.defaultProps = {
  aircraftList: [],
  isDataLoaded: false
};
