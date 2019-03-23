import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function ReportListItem(props){

  return(
    <div onClick={()=>{props.handleSelectDay(props.dayIndex)}}>
      <TableRow>
        <TableCell component='th' scope='row'>{props.dayIndex}</TableCell>
        <TableCell align='right'>{props.day.score}</TableCell>
      </TableRow>
    </div>
  )
}

export default (ReportListItem);
