import React from 'react';
import { connect } from 'react-redux';

function SelectedDayDisplay (props){
  const day = props.report[props.dayIndex];
  return(
    <div style={{color: 'green'}}>
      {day.score}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    report: state.report
  };
};

export default connect(mapStateToProps)(SelectedDayDisplay);
