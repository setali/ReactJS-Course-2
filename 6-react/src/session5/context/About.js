import React, { useContext } from 'react'
import {useLocation} from 'react-router-dom'
import ThemeContext from './ThemeContext'

function About (props) {

  const theme = useContext(ThemeContext)
  const location = useLocation()

  console.log(location.pathname === '/about')

  console.log(props)
  return (
    <article style={{
      border: 'solid 1px', margin: '1em', padding: '1em',
      flex: 3, ...theme
    }}>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur dolore dolorum ea error excepturi
        expedita harum impedit in itaque minus nemo, perspiciatis quae qui recusandae sint tempore, tenetur vero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam commodi earum error, expedita harum illo
        illum incidunt labore laborum minima minus officiis quasi reprehenderit saepe sapiente soluta tempore
        voluptates.
      </p>
    </article>
  )
}

export default About