import React from 'react';
import SelectedDayDisplay from './SelectedDayDisplay';
import {connect} from 'react-redux';

function SelectedDayController(props){


  if(props.dayIndex.constructor.name==='String'){
    return (
      <div>
        <SelectedDayDisplay dayIndex={props.dayIndex}/>
      </div>
    )
  } else {
    return (
      <div>
        Fetching report...
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    dayIndex: state.dayIndex
  };
};

export default connect(mapStateToProps)(SelectedDayController);
