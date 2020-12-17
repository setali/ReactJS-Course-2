import {useState} from 'react'

function Todos() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  function addTodo(e) {
    e.preventDefault()
    if (!todo) return
    setTodos([...todos, todo])
    setTodo('')
  }

  return (
    <div>
      <ol data-testid={"todo-list"}>
        {todos.map((todo, index) =>
          <li key={index}>{todo}</li>
        )}
      </ol>

      <form onSubmit={addTodo}>
        <input placeholder="todo" value={todo}
               onChange={e => setTodo(e.target.value)}/>
        <button type="submit">Add todo</button>
      </form>

    </div>
  )
}

export default Todos