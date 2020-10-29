import React, {Component} from 'react'

class Title extends Component {

  static defaultProps = {
    color: 'red',
    name: 'Ali'
  }

  render () {
    const {name, color} = this.props

    return (
      <div>
        <h1 style={{color}}>
          {name}
        </h1>
      </div>
    );
  }
}

// Title.defaultProps = {
//   color: 'red',
//   name: 'Ali'
// }

export default Title