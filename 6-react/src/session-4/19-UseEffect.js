import React, { useEffect, useState } from 'react'

// conponentDidMount() {
//   if (pervState.count !== this.state.count) {
//
//   }
// }

function App () {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <Counter/>}
    </>
  )
}

function Counter () {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])

  // cDM, cDU, cWU
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => setCounter(counter + 1), 1000)
  //
  //   return () => {
  //     console.log('Component will unmount', counter)
  //     clearTimeout(timeoutId)
  //   }
  // }, [counter])

  useEffect(() => {

    const controller = new AbortController()
    const signal = controller.signal

    fetch('https://jsonplaceholder.typicode.com/users', {signal})
      .then(response => response.json())
      .then(json => setUsers(json))

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div>
      {counter}
      <hr/>
      <ol>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ol>
    </div>
  )
}

function UseEffect () {

  const [count, setCount] = useState(0)
  const [state, setState] = useState(0)

  // cDM, cMU
  useEffect(() => {
    console.log('Salam')
  }, [count])

  console.log('Hi')

  return (
    <div>
      Hi
      <hr/>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr/>
      State: {state}
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  )
}

export default App
// export default Counter
// export default UseEffect
