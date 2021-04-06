import { string, bool, node, number, oneOf, oneOfType } from 'prop-types';
import SpinnerIcon from '../../assets/svg/ic-spinner.svg';
import styles from './Spinner.scss';

/*
 * NOTE: if the Spinner should be displayed inside an html container, then
 * the "isFullScreen" should be false, and
 * the parent element should have a "position: relative"
 */

export const Spinner = props => {
  if (!props.isVisible) {
    return null;
  }

  return (
    <div className={[styles.spinner, props.isFullScreen ? styles.fullScreen : styles.contained].join(' ')}>
      <div className={[styles.overlay, styles[props.overlayOpacity]].join(' ')} />
      <div className={styles.content}>
        <SpinnerIcon className={styles.spinnerIcon} width={props.size} height={props.size} />
        {!!props.message && <span className={styles.message}>{props.message}</span>}
      </div>
    </div>
  );
};

Spinner.propTypes = {
  size: number,
  isVisible: bool.isRequired,
  isFullScreen: bool.isRequired,
  message: oneOfType([node, string]),
  overlayOpacity: oneOf(['opaque', 'partial', 'transparent'])
};

Spinner.defaultProps = {
  isVisible: false,
  isFullScreen: false,
  overlayOpacity: 'partial',
  message: '',
  size: 60
};
