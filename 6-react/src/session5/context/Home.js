import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Home () {

  const theme = useContext(ThemeContext)

  return (
    <article style={{
      border: 'solid 1px', margin: '1em', padding: '1em',
      flex: 3, ...theme
    }}>
      <h1>My home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eos eum facere, illo iste minima nam
        necessitatibus nemo odit officia omnis possimus quaerat quasi rem repellat tempora ut vel voluptates.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam commodi earum error, expedita harum illo
        illum incidunt labore laborum minima minus officiis quasi reprehenderit saepe sapiente soluta tempore
        voluptates.
      </p>
    </article>
  )
}

export default Home