import React from 'react';

class Counter extends React.Component {

  // state = {
  //   counter: 0,
  //   status: true,
  //   person: {},
  //   friends: []
  // }

  constructor (props) {
    super(props);
    console.log(props)
    this.state = {
      counter: props.initCounter
    }

    this.decrease = this.decrease.bind(this)
  }

  increase() {
    this.setState({counter: this.state.counter + 1})
  }

  decrease() {
    this.setState({counter: this.state.counter - 1})
  }

  render () {
    console.log('Counter render')
    return (
      <div>
        {this.state.counter}
        <button onClick={() => this.increase()}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default Counter;
