import { combineReducers } from 'redux'
import { persons, person } from './person'
import { posts, post } from './post'
import { user, isLoggedIn, loginSubmitLoading } from './user'

export default combineReducers({
  persons,
  person,
  posts,
  post,
  user,
  isLoggedIn,
  loginSubmitLoading
})

// export default function reducer(state = {}, action) {
//   switch (action.type) {
//     case 'PERSONS':
//       // return action.payload
//       return {...state, persons: action.payload}
//
//     case 'POSTS':
//       return {...state, posts: action.payload}
//
//     default:
//       return state
//   }
// }