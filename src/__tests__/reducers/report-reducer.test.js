import reportReducer from '../../reducers/report-reducer';
import getSurfReport from '../../api';

describe('reportReducer', () => {
  const initialState = {};
  describe('null', () => {
    test('should return initialState', () => {
      expect(reportReducer(initialState, {type: null})).toEqual(initialState)
    });
  });

  describe('SET_REPORT', () => {
    test('should parse string from api call and return new report to json object', () => {
      return fetch('../exampleData.txt').then((text)=>{
        const reportJSON = reportReducer(initialState, {type: 'SET_REPORT', report: text})
        const firstKey = Object.keys(reportJSON)[0];
        expect(reportJSON[firstKey]).toBe(expect.objectContaining({
          date: expect.any(Date),
          SwP: expect.any(String),
          SwH: expect.any(String),
          WWD: expect.any(String)
        }));
      });
    });
  });
});
