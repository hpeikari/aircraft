import { func, bool, string, arrayOf, shape, number } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Spinner } from '../Spinner/Spinner';
import { Title } from '../Title/Title';
import styles from './List.scss';

export const List = props => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.wrapper}>
      <Title text={props.listTitle} />
      <div className={styles.content}>
        <Spinner isVisible={!props.isDataLoaded} message={t('loading')} overlayOpacity='opaque' isFullScreen={false} />
        {!props.data?.length ? <div className={styles.emptyList}>{t('listIsEmpty')}</div> : ''}
        {props.data?.map(item => (
          <div key={item.ident} className={styles.itemStyle} onClick={() => props.onItemClick(item.ident)}>
            <div className={styles.ident}>{item.ident}</div>
            <div>Type: {item.type}</div>
            <div>Seats: {item.economySeats}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  listTitle: string.isRequired,
  isDataLoaded: bool.isRequired,
  onItemClick: func.isRequired,
  data: arrayOf(
    shape({
      // the component needs refactoring so its independent of this data structure. render-props pattern is beneficial
      ident: string.isRequired,
      type: string.isRequired,
      economySeats: number.isRequired
    })
  ).isRequired
};

export default List;
