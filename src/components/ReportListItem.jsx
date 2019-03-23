import React from 'react';

function ReportListItem(props){
  return(
    <div onClick={()=>{props.handleSelectDay(props.dayIndex)}}>
      {props.dayIndex} | {props.day.score}
    </div>
  )
}

export default ReportListItem;
