import surfListReducer from '../../reducers/surf-list-reducer';

describe('surfListReducer', () => {
  const initialState = {};
  describe('null', () => {
    it('should return initialState', () => {
      expect(surfListReducer(initialState, {type: null})).toEqual(initialState)
    });
  });

  // describe('GET_SURF_LIST', () => {
  //   it('should retrieve a list of surf info', () => {
  //     expect(surfListReducer(initialState, {type: 'GET_SURF_LIST'})).toEqual(initialState)
  //   });
  // });
});
