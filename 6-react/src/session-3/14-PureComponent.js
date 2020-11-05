import React from 'react'

export default class App extends React.Component {
  state = {
    counter: 0,
    status: 0
  }

  render () {
    return (
      <div>

        <div>Counter: {this.state.counter}</div>
        <div>Status: {this.state.status}</div>

        <button onClick={
          () => this.setState(state => ({counter: state.counter + 1}))}>
          Change counter
        </button>
        <button onClick={
          () => this.setState(state => ({status: state.status + 1}))}>
          Change status
        </button>
        <hr/>

        <MyPureComponent counter={this.state.counter}/>
        <MyComponent counter={this.state.counter}/>
      </div>
    );
  }

}

class MyPureComponent extends React.PureComponent {

  render () {
    console.log('MyPureComponent render', this.props.counter)
    return (
      <div>
        MyPureComponent {this.props.counter}
      </div>
    );
  }
}

class MyComponent extends React.Component {

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return  nextProps.counter !== this.props.counter
  }

  render () {
    console.log('MyComponent render', this.props.counter)
    return (
      <div>
        MyComponent {this.props.counter}
      </div>
    );
  }
}

