import React from 'react'

export default class Parent extends React.Component {

  state = {mount: true}

  render () {
    return (
      <div>
        {this.state.mount && <Child/>}
        <button onClick={() => this.setState({mount: !this.state.mount})}>
          Mounting / UnMounting
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  state = {counter: 0}

  componentDidMount () {
    console.log('componentDidMount')
    this.intervalId = setInterval(() => {
        console.log('salam')
        this.setState({counter: this.state.counter + 1})
      }
      , 1000
    )
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.intervalId)
  }

  render () {
    return (
      <div>
        Child: {this.state.counter}
      </div>
    );
  }
}