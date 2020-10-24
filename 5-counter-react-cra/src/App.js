import React from 'react';

class Counter extends React.Component {

  state = {
    counter: 0
  }

  render () {
    return (
      <div>
        {this.state.counter}
        <button  style={{marginLeft: '10px', marginRight: '20px'}} onClick={() => this.setState({counter: this.state.counter + 1})}>Increase</button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>Decrease</button>
      </div>
    )
  }
}

export default Counter;
