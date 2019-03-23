import React from 'react';
import { connect } from 'react-redux';
import ReportList from './ReportList';
import getSurfReport from '../api';

class ReportController extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const {dispatch} = this.props;

    const surfReportPromise = getSurfReport();
    surfReportPromise.then((response)=>{
      dispatch({type: 'SET_REPORT', report: response});
    });

  }

  render(){
    if(Object.keys(this.props.report).length){
      return <div><ReportList report={this.props.report}/></div>
    } else {
      return <div>You may need to enable CORS and reload the page</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    report: state.report
  };
};

export default connect(mapStateToProps)(ReportController);
