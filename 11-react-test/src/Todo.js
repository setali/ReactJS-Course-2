import {useState, useEffect} from 'react'

function Todo() {

  const [todo, setTodo] = useState({})

  // alert()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/10')
      .then(response => response.json())
      .then(data => setTodo(data))
  }, [])

  return (
    <div>
      <h1>Todo item</h1>
      <p>{todo.title}</p>
    </div>
  )
}

export default Todo