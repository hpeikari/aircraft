import { string } from 'prop-types';
import styles from './Title.scss';

export const Title = ({ text }) => <div className={styles.title}>{text}</div>;

Title.propTypes = {
  text: string.isRequired
};
