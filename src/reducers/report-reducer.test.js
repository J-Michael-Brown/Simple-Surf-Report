import reportReducer from './report-reducer';
import getSurfReport from '../api';
import types from '../actions';

describe('reportReducer', () => {
  const initialState = {};
  describe('null', () => {
    test('should return initialState', () => {
      expect(reportReducer(initialState, {type: null})).toEqual(initialState)
    });
  });

  // describe('SET_REPORT', () => {
  //   test('should parse string from api call and return new report to json object', () => {
  //     let actionPromise = types.SET_REPORT();
  //
  //     return actionPromise.then((action)=>{
  //       console.log(action.report);
  //       expect(reportReducer(initialState, action)).toEqual('hey there handsome');
  //
  //     });
  //     // expect(getSurfReport()).toEqual(String);
  //     // surfReportPromise.then((reportText)=>{
  //     // })
  //   });
  // });
});
