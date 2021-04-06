export default () => ({
  getAllAircrafts: jest.fn(() => new Promise(resolve => resolve({}))),
  getAircraftByIds: jest.fn(() => new Promise(resolve => resolve({}))),
  getAllFlights: jest.fn(() => new Promise(resolve => resolve({}))),
  getFlightById: jest.fn(() => new Promise(resolve => resolve({})))
});
