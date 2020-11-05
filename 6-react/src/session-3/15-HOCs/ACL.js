import React from 'react'

const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['view_task_list', 'add_task']
}

export default function ACL(Component) {

  // return <Component />
  return class MyACL extends React.Component {
    render () {
      console.log(this.props.permission)
      return user.permissions.includes(this.props.permission) &&
        <Component {...this.props}/>
    }
  }
}
