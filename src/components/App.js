import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import getSurfReport from '../api';
import { connect } from 'react-redux';

class App extends Component {

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    report: state.report
  }
}

export default connect(mapStateToProps)(App);
