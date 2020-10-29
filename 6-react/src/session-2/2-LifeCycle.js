import React from 'react'

class LifeCycle extends React.Component {

  constructor (props) {
    console.log('constructor')
    super(props);
    this.state = {
      counter: 0,
      // data: {}
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state)

    if (state.counter % 2 ) {
      return { counter: state.counter + 1}
    }

    return null
  }

  componentDidMount () {
    console.log('componentDidMount')
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => this.setState({data: json}))
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
    // console.log('nextProps: ', nextProps, 'props: ', this.props)
    console.log('nextState: ', nextState, 'state: ', this.state)

    if (nextState.counter % 4 === 0) {
      return false
    }
    return true
  }


  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot)
    // console.log('prevProps: ', prevProps, 'newProps: ', this.props)
    console.log('prevState: ', prevState, 'newState: ', this.state)
    console.log('snapshot =======> ', snapshot)
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate =========> ')
    // console.log('prevProps: ', prevProps, 'newProps: ', this.props)
    console.log('prevState: ', prevState, 'newState: ', this.state)

    return this.state.counter - prevState.counter
  }

  render () {
    console.log('render')

    return (
      <div>
        {/*{this.state.data.title}*/}
        {/*<hr />*/}
        {this.state.counter}
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>
          Increase
        </button>
      </div>
    );
  }
}

export default LifeCycle