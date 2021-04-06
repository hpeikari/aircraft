import AircraftList from './AircraftList/container';
import FlightList from './FlightList/container';
import Rotation from './Rotation/container';
import Calendar from './Calendar/container';
import { Footer } from '../../components/Footer/Footer';
import Logo from '../../assets/img/Logo.png';
import styles from './HomePage.scss';

const HomePage = () => (
  <div className={styles.layout}>
    <div className={styles.header}>
      <img src={Logo} className={styles.logo} />
      <Calendar />
    </div>
    <div className={styles.scheduleWrapper}>
      <AircraftList />
      <Rotation />
      <FlightList />
    </div>
    <Footer />
  </div>
);

export default HomePage;
