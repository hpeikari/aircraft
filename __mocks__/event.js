export default keys => ({
  stopPropagation: jest.fn(),
  preventDefault: jest.fn(),
  ...keys
});
