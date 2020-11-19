import React from 'react'
import ThemeContext from './ThemeContext'

class Footer extends React.Component {

  render () {
    return (
      <footer
        style={{border: 'solid 1px', margin: '1em', padding: '1em', ...this.context}}>
        <h2> My Footer </h2>
      </footer>
    )
  }

}

Footer.contextType = ThemeContext

export default Footer