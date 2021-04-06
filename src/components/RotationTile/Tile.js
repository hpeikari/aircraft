import { shape, string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import ArrowIcon from '../../assets/svg/ic-arrow.svg';
import styles from './Tile.scss';

export const Tile = ({ flight }) => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.wrapper}>
      <div>{t('flight', { id: flight.id })}</div>
      <div className={styles.detailsWrapper}>
        <Detail location={flight.origin} time={flight.readable_departure} />
        <ArrowIcon className={styles.icon} />
        <Detail location={flight.destination} time={flight.readable_arrival} />
      </div>
    </div>
  );
};

Tile.propTypes = {
  flight: shape({
    id: string.isRequired,
    origin: string.isRequired,
    destination: string.isRequired,
    readable_arrival: string.isRequired,
    readable_departure: string.isRequired
  }).isRequired
};

const Detail = props => (
  <div className={styles.details}>
    <p>{props.location}</p>
    <p>{props.time}</p>
  </div>
);

Detail.propTypes = {
  location: string.isRequired,
  time: string.isRequired
};
