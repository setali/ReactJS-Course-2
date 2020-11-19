import React, { useContext } from 'react'
import {Redirect, useHistory, useLocation} from 'react-router-dom'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

function Login() {
  const theme = useContext(ThemeContext)
  const {login, authenticated} = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()

  console.log('LOGIN => ', history)
  console.log(location)

  function signIn() {
    const {oldPath} = location.state || {oldPath: '/'}

    login()
    history.push(oldPath)
  }

  if (authenticated) {
    return <Redirect to={"/"} />
  }

  return (
    <article style={{
      border: 'solid 1px', margin: '1em', padding: '1em',
      flex: 3, ...theme
    }}>

      {/*{authenticated && <Redirect to={"/"} />}*/}

      <button onClick={() => signIn()}>Login </button>

    </article>
  )
}

export default Login