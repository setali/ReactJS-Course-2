import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function NotFound (props) {

  const theme = useContext(ThemeContext)

  return (
    <article style={{
      border: 'solid 1px', margin: '1em', padding: '1em',
      flex: 3, ...theme
    }}>
      <h1>404 NotFound Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias at cumque dignissimos
        expedita facilis illo, illum, laborum magni molestiae mollitia neque nisi quo quos similique sit temporibus
        veritatis!
      </p>
    </article>
  )
}

export default NotFound