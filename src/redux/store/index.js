import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import AirlineService from '../../services/airline';
import rootReducer from '../reducers';
import config from '../../config';

const services = {
  AirlineService: AirlineService(config)
};

const middlewares = [thunk.withExtraArgument(services)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // list of actions to filter in Redux DevTools
      actionsBlacklist: []
    })
  : compose;

export default createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));
