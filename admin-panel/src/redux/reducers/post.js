import {createReducer} from '@reduxjs/toolkit'

export const posts = createReducer([], {POSTS: (state, action) => action.payload})
export const post = createReducer([], {POST: (state, action) => action.payload})


// export function posts (state = [], action) {
//   switch (action.type) {
//     case 'POSTS':
//       return action.payload
//
//     default:
//       return state
//   }
// }
//
// export function post (state = {}, action) {
//   switch (action.type) {
//     case 'POST':
//       return action.payload
//
//     default:
//       return state
//   }
// }