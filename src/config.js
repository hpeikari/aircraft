import { isDevMode } from './utils/isDevMode';

// Development config set up
if (isDevMode && process.env.NODE_ENV === 'development' && !window.appConfig) {
  const dev = 'https://infinite-dawn-93085.herokuapp.com';
  window.appConfig = {
    URL_ROOT: '',
    AIRLINE_URL: `${dev}`
  };
}

const appConfig = window.appConfig || {};

export default {
  airlineUrl: appConfig.AIRLINE_URL
};
