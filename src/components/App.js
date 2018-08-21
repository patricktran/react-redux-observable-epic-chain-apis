import { connect } from 'react-redux';
import React from 'react';
import actions from '../actions';
import './App.css';

let App = ({ isPinging, ping }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>is pinging: {isPinging.toString()}</h1>
        <button onClick={ping}>Start PING</button>
      </header>
      <p className="App-intro">
        To get started, open Dev Tools (F12) to the Console Tab and then click on the 'Start PING' button.
        </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isPinging: state.ping
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
