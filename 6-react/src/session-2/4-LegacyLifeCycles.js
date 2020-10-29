import React from 'react'

class LegacyLifeCycles extends React.Component {

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
        LegacyLifeCycles
      </div>
    );
  }
}

export default LegacyLifeCycles