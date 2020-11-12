import React, { useState } from 'react'

function App() {

  const username = useForm('')
  const password = useForm()

  return (
    <div>
      <input type="text" placeholder="username" {...username} />
      <input type="text" placeholder="Password" {...password} />
    </div>
  )
}

function useForm(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

// function App() {
//
//   const [userName, setUserName] = useState('')
//   const [password, setPassword] = useState('')
//
//   return (
//     <div>
//       <input
//         type="text" placeholder="username"
//         value={userName}
//         onChange={e => setUserName(e.target.value)}
//       />
//       <input
//         type="text" placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//     </div>
//   )
// }



export default App