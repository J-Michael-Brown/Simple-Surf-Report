import reportReducer from '../../reducers/report-reducer';
import getSurfReport from '../../api';
import exampleData from '../../exampleData';

describe('reportReducer', () => {
  const initialState = {};
  describe('null', () => {
    test('should return initialState', () => {
      expect(reportReducer(initialState, {type: null})).toEqual(initialState)
    });
  });

  describe('SET_REPORT', () => {
    test('should parse string from api call and return new report to json object', () => {
      const reportJSON = reportReducer(initialState, {type: 'SET_REPORT', report: exampleData})
      const firstKey = Object.keys(reportJSON)[0];
      expect(reportJSON[firstKey]).toEqual(expect.objectContaining({
        yr: expect.any(String),
        mo: expect.any(String),
        dy: expect.any(String),
        hr: expect.any(String),
        mn: expect.any(String),
        WVHT: expect.any(String),
        SwH: expect.any(String),
        SwP: expect.any(String),
        WWH: expect.any(String),
        WWP: expect.any(String),
        SwD: expect.any(String),
        WWD: expect.any(String),
        STEEPNESS: expect.any(String),
        APD: expect.any(String),
        MWD: expect.any(String),
        score: expect.any(Number),
        date: expect.any(Date)
      }));
    });
  });
});
