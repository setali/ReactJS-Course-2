import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

function Profile (props) {

  const theme = useContext(ThemeContext)
  const {user} = useContext(UserContext)

  return (
    <article style={{
      border: 'solid 1px', margin: '1em', padding: '1em',
      flex: 3, ...theme
    }}>
      <h1>My Profile Page</h1>
      <p>
        Name: {user.name}
      </p>
      <p>
        City: {user?.address?.city}
        {/*City: {user.address ? user.address.city : ''}*/}
      </p>
    </article>
  )
}

export default Profile