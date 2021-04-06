import { shape, number, string, arrayOf } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { BarChart } from '../../../components/BarChart/BarChart';

export const Timeline = ({ totalScheduled, timeline }) => {
  const { t } = useTranslation('common');

  return <BarChart data={timeline} description={t('totalScheduled', { percentage: totalScheduled })} />;
};

Timeline.propTypes = {
  totalScheduled: number.isRequired,
  timeline: shape({
    durations: arrayOf(number),
    colors: arrayOf(string),
    durationsSum: number
  }).isRequired
};

Timeline.defaultProps = {
  totalScheduled: 0,
  timeline: {}
};
