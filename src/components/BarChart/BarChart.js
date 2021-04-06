import { shape, string, arrayOf, number } from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './BarChart.scss';

const map = (value, valueRangeStart, valueRangeEnd, newRangeStart, newRangeEnd) => {
  return (
    newRangeStart + (newRangeEnd - newRangeStart) * ((value - valueRangeStart) / (valueRangeEnd - valueRangeStart))
  );
};

export const BarChart = ({ description, data }) => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.wrapper}>
      <div className={styles.totalSchedule}>{description}</div>
      <div className={styles.chart}>
        {data?.durations?.map((item, i) => {
          const value = Math.floor(map(data.durations[i], 0, data.durationsSum, 0, 100));
          return (
            <div
              key={i}
              title={t('barPercentage', { value })}
              className={[styles.bar, i === 0 || i === data.durations.length - 1 ? styles.barEnds : ''].join(' ')}
              style={{
                width: value + '%',
                backgroundColor: data.colors[i]
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

BarChart.propTypes = {
  description: string.isRequired,
  data: shape({
    durations: arrayOf(number),
    colors: arrayOf(string),
    durationsSum: number
  }).isRequired
};

BarChart.defaultProps = {
  description: '',
  data: {}
};
