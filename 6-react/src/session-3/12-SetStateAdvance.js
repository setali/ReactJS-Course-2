import React from 'react'

class Tasks extends React.Component {

  state = {
    tasks: [],
    count: 0
  }

  generateTask() {
    const time = Date.now()

    return {
      title: `Task ${time}`,
      id: time
    }
  }

  addTask() {
    console.log('addTask')
    // this.setState({tasks: [...this.state.tasks, this.generateTask()]})
    this.setState(state => ({tasks: [...state.tasks, this.generateTask()]}))

    // console.log(this.props.calculateCount)
    // if (this.props.calculateCount) {
    //   console.log('Change count', this.state.tasks.length)
    //   this.setState({count: this.state.tasks.length})
    //   this.setState({count: 0})
      this.setState(state => ({count: state.tasks.length}),
        () => console.log('Count initial'))
    // }
  }

  render () {
    return (
      <div>
        <button onClick={() => this.addTask()}>Add task</button>
        <hr/>
        {this.props.calculateCount && <span>Count: {this.state.count}</span>}
        <hr/>
        <ol>
          {this.state.tasks.map(task => <li key={task.id}>{task.title}</li>)}
        </ol>
      </div>
    );
  }
}

export default Tasks