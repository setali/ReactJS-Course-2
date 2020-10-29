import React from 'react'

class ForceUpdate extends React.Component {

  getRandom() {
    this.forceUpdate()
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return false
  }

  UNSAFE_componentWillMount () {
    console.log('UNSAFE_componentWillMount')
  }

  UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
    console.log('UNSAFE_componentWillReceiveProps')
  }

  UNSAFE_componentWillUpdate (nextProps, nextState, nextContext) {
    console.log('UNSAFE_componentWillUpdate')
  }

  render () {
    console.log('render')
    return (
      <div>
        ForceUpdate
        <hr/>
        {Math.random()}

        <button onClick={() => this.getRandom()}>
          Get Random
        </button>
      </div>
    );
  }
}

export default ForceUpdate