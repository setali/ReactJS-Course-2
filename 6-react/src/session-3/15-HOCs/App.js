import React from 'react'
import Tasks from './Tasks'

class App extends React.Component {

  render () {
    return (
      <div>
        <h2>My App</h2>

        <hr/>

        <Tasks permission="view_task_list" title={"My Tasks"} />
      </div>
    );
  }
}

export default App