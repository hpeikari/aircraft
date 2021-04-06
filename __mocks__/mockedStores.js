import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AirlineService from './mockedAirlineService';

const services = {
  AirlineService: AirlineService(),
};

const middlewares = [thunk.withExtraArgument(services)];

export const mockStore = configureMockStore(middlewares);
