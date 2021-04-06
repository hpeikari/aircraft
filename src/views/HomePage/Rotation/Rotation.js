import { useEffect } from 'react';
import { func, shape, number, bool, string, arrayOf } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Spinner } from '../../../components/Spinner/Spinner';
import { Tile } from '../../../components/RotationTile/Tile';
import Timeline from '../Timeline/container';
import styles from './Rotation.scss';

const Rotation = props => {
  const { t } = useTranslation('common');
  useEffect(() => {
    props.aircraftId && props.getAllFlights(props.aircraftId);
  }, [props.aircraftId, props.dateIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{t('rotation', { aircraft: props.aircraftId })}</div>
      <div className={styles.content}>
        <Spinner isVisible={props.isLoading} message={t('loading')} overlayOpacity='opaque' isFullScreen={false} />
        {!props.dailyFlightList.length ? (
          <div className={styles.emptyList}>{t('selectAircraft')}</div>
        ) : (
          props.dailyFlightList.map(flight => <Tile flight={flight} key={flight.id} />)
        )}
      </div>
      <Timeline />
    </div>
  );
};

export default Rotation;

Rotation.propTypes = {
  dateIndex: number.isRequired,
  aircraftId: string.isRequired,
  getAllFlights: func.isRequired,
  isLoading: bool.isRequired,
  dailyFlightList: arrayOf(
    shape({
      id: string.isRequired,
      origin: string.isRequired,
      destination: string.isRequired,
      readable_arrival: string.isRequired,
      readable_departure: string.isRequired
    })
  ).isRequired
};

Rotation.defaultProps = {
  dateIndex: 0,
  aircraftId: '',
  isLoading: false,
  dailyFlightList: []
};
