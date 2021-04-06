import { useTranslation } from 'react-i18next';
import styles from './Footer.scss';

export const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.footer}>
      <div className={styles.applicant}>{t('applicant')}</div>
      <div className={styles.copyright}>{t('copyright')}</div>
    </div>
  );
};
