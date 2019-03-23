import React from 'react';
import ReportListItem from './ReportListItem';
import {v4} from 'uuid';
import {connect} from 'react-redux';

class ReportList extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount(){
    const {dispatch} = this.props;
    const firstDay = Object.keys(this.props.report)[0];
    dispatch({type: 'SET_DAY_INDEX', dayIndex: firstDay})
  }

  render(){
    return(
      <div>
      {Object.keys(this.props.report).map((dayIndex)=>{
        let day = this.props.report[dayIndex];
        return <ReportListItem
        day={day}
        dayIndex={dayIndex}
        key={v4()}/>
      })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dayIndex: state.dayIndex
  };
};

export default connect(mapStateToProps)(ReportList);
