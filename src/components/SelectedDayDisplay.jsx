import React from 'react';
import { connect } from 'react-redux';

function SelectedDayDisplay (){
  return(
    <div>
      {this.props.dayIndex}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    report: state.report
  };
};

export default connect(mapStateToProps)(SelectedDayDisplay);
