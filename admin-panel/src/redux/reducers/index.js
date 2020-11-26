import { combineReducers } from 'redux'
import { persons, person } from './person'
import { posts } from './post'


export default combineReducers({
  persons,
  person,
  posts
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