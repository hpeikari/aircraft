export default () => ({
  create: jest.fn().mockReturnThis(),
  get: jest.fn(),
  put: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
  patch: jest.fn()
});
