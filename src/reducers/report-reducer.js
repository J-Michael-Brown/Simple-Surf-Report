function reportReducer(state = {}, action){
  const {report, type} = action;
  let newReport;
  switch (type) {
    case 'SET_REPORT':
      newReport = {};
      for (var i = 140; i <= report.length; i+=70) {
        let dayReport = report.slice(i, i+70).split(/\s+/).filter(function(str){return str!==''});
        let day = {};
        let date = `${dayReport[0]}-${dayReport[1]}-${dayReport[2]}`;
        day['yr'] = dayReport[0];
        day['mo'] = dayReport[1];
        day['dy'] = dayReport[2];
        day['hr'] = dayReport[3];
        day['mn'] = dayReport[4];
        day['WVHT'] = dayReport[5];
        day['SwH'] = dayReport[6];
        day['SwP'] = dayReport[7];
        day['WWH'] = dayReport[8];
        day['WWP'] = dayReport[9];
        day['SwD'] = dayReport[10];
        day['WWD'] = dayReport[11];
        day['STEEPNESS'] = dayReport[12];
        day['APD'] = dayReport[13];
        day['MWD'] = dayReport[14];
        day['date'] = new Date(date);
        newReport[date] = day;
      }
      return newReport;
    default:
      return state;
  }
}

export default reportReducer;
