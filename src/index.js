import 'focus-visible';
import 'classlist-polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { createBrowserHistory } from 'history';
import i18n from './i18n';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import './styles/index.scss';
import './styles/importedStyles';

const history = createBrowserHistory();

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  </I18nextProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
