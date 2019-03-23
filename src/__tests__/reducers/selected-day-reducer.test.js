import selectedDayReducer from '../../reducers/selected-day-reducer';
import {exampleJSON} from '../../exampleData';

const initialState = exampleJSON;

describe('selectedDayReducer', () => {
  describe('SET_DAY_INDEX', () => {
    it('should return a given newDayIndex', () => {
      const firstInstanceOfDay = Object.keys(exampleJSON)[0];
      expect(selectedDayReducer(initialState, {type: 'SET_DAY_INDEX', dayIndex: firstInstanceOfDay})).toBe(firstInstanceOfDay);
    });
  })
});
