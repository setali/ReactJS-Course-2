import React from 'react';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      counter: 0
    }

  }

  render () {
    console.log('render')
    return (
      <div>
        {this.state.counter}
      </div>
    );
  }
}

export default App;
