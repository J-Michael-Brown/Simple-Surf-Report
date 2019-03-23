import React from 'react';
import '../css/App.css';
import ReportController from './ReportController';
import SelectedDayController from './SelectedDayController';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <ReportController />
      </header>
    </div>
  );
}

export default App;
