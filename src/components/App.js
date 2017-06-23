import React from 'react';

class App extends React.Component {

  render () {
    const {pingAction, isPinging} = this.props;

    return (
      <div>
        <h1>is pinging: {isPinging.toString()}</h1>
        <button onClick={pingAction}>
          Start PING
        </button>
      </div>
    );
  }
}

export default App;
