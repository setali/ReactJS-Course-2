import React, {useState, useEffect} from 'react'

function Counter() {

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('salam', counter)
      setCounter(counter => counter + 1)
    }, 1000)

    return () => {
      console.log('Unmount')
      clearInterval(intervalId)
    }
  }, [])

  console.log('counter', counter)


  return counter

}

export default Counter