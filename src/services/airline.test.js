import { AirlineService } from './airline';
import axiosMock from '../../__mocks__/axios';

describe('Activity Service', () => {
  let service, axios;

  beforeEach(() => {
    axios = axiosMock();
    service = AirlineService(() => axios);
  });

  describe('getAllAircrafts', () => {
    it('should call /aircrafts', () => {
      service.getAllAircrafts();
      expect(axios.get.mock.calls[0][0]).toEqual('/aircrafts');
    });
  });

  describe('getAircraftById', () => {
    it('should call /aircrafts/:id', () => {
      service.getAircraftById('ABCDE');
      expect(axios.get.mock.calls[0][0]).toEqual('/aircrafts/ABCDE');
    });
  });

  describe('getAllFlights', () => {
    it('should call /flights', () => {
      service.getAllFlights();
      expect(axios.get.mock.calls[0][0]).toEqual('/flights');
    });
  });

  describe('getFlightById', () => {
    it('should call /flights/:id', () => {
      service.getFlightById('AS1001');
      expect(axios.get.mock.calls[0][0]).toEqual('/flights/AS1001');
    });
  });
});
