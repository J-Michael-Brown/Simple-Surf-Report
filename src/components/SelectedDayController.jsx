import React from 'react';
import SelectedDayDisplay from './SelectedDayDisplay';

function SelecedDayController(props){


  if(this.props.dayIndex){
    return (
      <div>
        <SelectedDayDisplay dayIndex={this.props.dayIndex}/>
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

export default connect(mapStateToProps)(SelecedDayController);
