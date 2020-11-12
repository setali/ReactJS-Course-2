import React, { useReducer } from 'react'

const defaultState = 0

function reducer(state, action) {
  console.log('state => ', state)
  console.log('action => ',action)

  switch (action.type) {
    case 'ADD':
      return state + (action.payload || 1)

    case 'SUB':
      return state - (action.payload || 1)

    case 'RESET':
      return defaultState

    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, defaultState)

  console.log(state)

  return (
    <div>
      {state}
      <hr/>
      <button onClick={() => dispatch({type: 'ADD'})}>+</button>
      <button onClick={() => dispatch({type: 'ADD', payload: 2})}>+2</button>
      <button onClick={() => dispatch({type: 'ADD', payload: 3})}>+3</button>
      <button onClick={() => dispatch({type: 'SUB'})}>-</button>
      <button onClick={() => dispatch({type: 'SUB', payload: 5})}>-5</button>
      <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>

    </div>
  )
}

export default App
