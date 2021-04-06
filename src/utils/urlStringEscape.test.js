import urlStringEscape from './urlStringEscape';

describe('urlStringEscape', () => {
  it('should escape interpolated string segments', () => {
    const model = 'Model A';
    const path = 'Path & stuff';
    expect(urlStringEscape`/api/Models/${model}/Paths/${path}`).toEqual(
      '/api/Models/Model%20A/Paths/Path%20%26%20stuff'
    );
  });
});
