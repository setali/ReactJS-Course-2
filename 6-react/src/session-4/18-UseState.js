import React, {useState} from 'react'

function Counter() {
  // const [count, setCount] = useState(() => 0)
  const [count, setCount] = useState(0)

  return (
    <div>
      {count}
      <hr/>
      <button
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  )
}

// function Counter() {
//   const state = useState(0)
//   console.log(state)
//
//   return (
//     <div>
//       {state[0]}
//       <hr/>
//       <button
//         onClick={() => state[1](state[0] + 1)}
//       >
//         +
//       </button>
//     </div>
//   )
// }

export default Counter