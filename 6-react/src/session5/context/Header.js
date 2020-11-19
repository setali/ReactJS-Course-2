import React from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

class Header extends React.Component {

  render () {
    return (
      <UserContext.Consumer>
        {({user, authenticated, login, logout}) =>
          <ThemeContext.Consumer>
            {theme =>
              <header
                style={{
                  border: 'solid 1px', display: 'flex', justifyContent: 'space-between',
                  margin: '1em', padding: '1em', ...theme
                }}>
                <h2> My Header </h2>
                {
                  authenticated ?
                  <span>
                    Hi {user.name}
                    <span
                      style={{color: 'red', marginLeft: '5px'}}
                      onClick={() => logout()}
                    >
                       Logout
                    </span>
                  </span> :
                    <Link to="/login" >
                      Login
                    </Link>
                }
              </header>
            }
          </ThemeContext.Consumer>
        }
      </UserContext.Consumer>
    )
  }

}

export default Header