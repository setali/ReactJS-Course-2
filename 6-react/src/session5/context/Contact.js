import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Contact (props) {

  const theme = useContext(ThemeContext)

  console.log(props)
  return (
    <article style={{
      border: 'solid 1px', margin: '1em', padding: '1em',
      flex: 3, ...theme
    }}>
      <h1>Contact Page</h1>
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

export default Contact