import createReducer from './createReducer';

describe('createReducer', () => {
  it('should create reducer', () => {
    const initialState = {
      state: 'test state'
    };
    const reducer = createReducer({}, state => ({
      ACTION_A: () => ({
        ...state,
        actionProp: 'test A'
      }),
      ACTION_B: () => ({
        ...state,
        actionProp: 'test B'
      })
    }));
    expect(reducer(initialState, { type: 'ACTION_A' })).toEqual({
      actionProp: 'test A',
      state: 'test state'
    });
    expect(reducer(initialState, { type: 'ACTION_B' })).toEqual({
      actionProp: 'test B',
      state: 'test state'
    });
  });
});
