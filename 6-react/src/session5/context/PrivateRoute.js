import React, { useContext } from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import UserContext from './UserContext'

function PrivateRoute({children, Component, render, ...props}) {
  console.log(props)

  const {authenticated} = useContext(UserContext)
  const location = useLocation()
  console.log(location)

  if (authenticated) {
    // return <Route {...props} render={(props) => <Component {...props} />} />
    return <Route {...props} render={render || (props => <Component {...props} />)} />
  }


  return <Redirect to={{pathname: '/login', state: {oldPath: location.pathname}}} />

}

export default PrivateRoute