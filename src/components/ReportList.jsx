import React from 'react';
import ReportListItem from './ReportListItem';
import {v4} from 'uuid';

function ReportList(props){
  return(
    <div>
      {Object.keys(props.report).map((dayIndex)=>{
        let day = props.report[dayIndex];
        return <ReportListItem
                  day={day}
                  dayIndex={dayIndex}
                  key={v4()}/>
      })}
    </div>
  )
}

export default ReportList;
