import React, { useEffect, useMemo, useState } from 'react'

const data = [
  {id: 0, title: 'Ali', parentId: null},
  {id: 1, title: 'Ali', parentId: 0},
  {id: 2, title: 'Ali', parentId: 0},
  {id: 3, title: 'Ali', parentId: 1},
  {id: 4, title: 'Ali', parentId: 1},
]


function nest(data) {
  return data
}

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      {show && <UseMemo />}
      <button onClick={() => setShow(show => !show)}>
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

function UseMemo() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setCount(count => count + 1), 1000)

    return () => clearInterval(intervalId)
  })

  const value = useMemo(() => {
    console.log(count)
    return (99999999n ** 9999n).toString()
  }, [])

  return (
    <div>
      Count = {count}
      <hr/>
      {value}
    </div>
  )
}

export default React.memo(App) // PureComponent