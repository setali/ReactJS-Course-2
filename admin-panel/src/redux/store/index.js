import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'


const myMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }

  next(action)
}


// const myMiddleware = function (store) {
//   return function (next) {
//     return function (action) {
//       console.log(store)
//       console.log(next)
//       console.log(action)
//
//       if (typeof action === 'function') {
//         return action(store.dispatch)
//       }
//
//       next(action)
//     }
//   }
// }


const store = createStore(reducers, applyMiddleware(thunk))

export default store