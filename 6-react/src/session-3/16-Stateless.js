import React from 'react'

export default class Users extends React.Component {
  state = {
    users: [
      {id: 1, name: 'Ali'},
      {id: 2, name: 'Hasan'},
      {id: 3, name: 'Qoli'},
    ]
  }

  render () {
    return (
      <div>
        {this.state.users.map(user => <User key={user.id} user={user} />)}
      </div>
    );
  }
}

// class User extends React.Component {
//   render () {
//     return (
//       <div>
//         <span>Name: </span>
//         <span>{this.props.user.name}</span>
//       </div>
//     );
//   }
// }

function User(props) {
  return (
    <div>
      <span>Name: </span>
      <span>{props.user.name}</span>
    </div>
  );
}

