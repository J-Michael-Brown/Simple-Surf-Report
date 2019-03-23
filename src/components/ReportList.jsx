import React from 'react';
import ReportListItem from './ReportListItem';
import {v4} from 'uuid';
import {connect} from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class ReportList extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
    this.handleSelectDay = this.handleSelectDay.bind(this);
  }

  componentDidMount(){
    const {dispatch} = this.props;
    const firstDay = Object.keys(this.props.report)[0];
    dispatch({type: 'SET_DAY_INDEX', dayIndex: firstDay})
  }

  handleSelectDay(dayIndex){
    const {dispatch} = this.props;
    dispatch({type: 'SET_DAY_INDEX', dayIndex: dayIndex});
  }

  render(){
    return(
      <div style={{width: '700px'}}>
        <Paper className='root'>
          <Table className='table'>
            <TableHead>
              <TableCell>Date</TableCell>
              <TableCell align='right'>WWD</TableCell>
              <TableCell align='right'>SwP</TableCell>
              <TableCell align='right'>SwH</TableCell>
              <TableCell align="right">score</TableCell>
            </TableHead>
            <TableBody>
              {Object.keys(this.props.report).map((dayIndex)=>{
                let day = this.props.report[dayIndex];
                return(
                  <TableRow key={v4()} onClick={()=>{this.handleSelectDay(dayIndex)}}>
                    <TableCell component='th' scope='row'>{dayIndex}</TableCell>
                    <TableCell align='right'>{day.WWD}</TableCell>
                    <TableCell align='right'>{day.SwP}</TableCell>
                    <TableCell align='right'>{day.SwH}</TableCell>
                    <TableCell align='right'>{day.score}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    report: state.report,
    dayIndex: state.dayIndex
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ReportList));
