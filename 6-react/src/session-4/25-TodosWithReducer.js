import React, { useState, useReducer } from 'react'

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {id: state.length ? state[state.length - 1].id + 1 : 1, title: action.payload}]

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload)

    default:
      throw new Error('Action type is not valid.')
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [task, setTask] = useState('')

  function addTodo() {
    dispatch({type: ADD_TODO, payload: task})
    setTask('')
  }

  function removeTodo(id) {
    dispatch({type: REMOVE_TODO, payload: id})
  }

  return (
    <div>
      <ol>
        {todos.map(todo =>
          <li key={todo.id}>
            {todo.title}
            <span
              style={{margin: '5px', color: 'red'}}
              onClick={e => removeTodo(todo.id)}>
              x
            </span>
          </li>
        )}
      </ol>
      <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default App