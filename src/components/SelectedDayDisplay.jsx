import React from 'react';
import { connect } from 'react-redux';

function SelectedDayDisplay (props){
  return(
    <div style={{color: 'green'}}>
      {props.report[props.dayIndex].score}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    report: state.report
  };
};

export default connect(mapStateToProps)(SelectedDayDisplay);
