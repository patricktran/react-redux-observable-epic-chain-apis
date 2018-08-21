import { connect } from 'react-redux';
import React from 'react';
import actions from '../actions';
import './App.css';

let App = ({isPinging, ping}) => {
  return (
    <div className="App">
      <header className="App-header">

        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    isPinging: state.isPinging
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    ping: () => {
      dispatch(actions.ping());
    }
  }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
