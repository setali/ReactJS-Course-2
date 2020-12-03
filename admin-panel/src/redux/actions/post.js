import {createAction} from '@reduxjs/toolkit'
import request from '../../tools/Request'


const setPosts = createAction('POSTS')
const setPost = createAction('POST')


// export function setPosts(payload) {
//   return {
//     type: 'POSTS',
//     payload
//   }
// }
//
// export function setPost(payload) {
//   return {
//     type: 'POST',
//     payload
//   }
// }

export function getPost(id) {
  return dispatch => request(`/posts/${id}`)
    .then(response => dispatch(setPost(response.data)))
}

export function getPosts() {
  return dispatch => request({url: '/posts', entity: 'posts'})
    .then(response => dispatch(setPosts(response.data)))

  // axios('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => dispatch(setPosts(response.data)))


  // return function(dispatch) {
  //   return axios('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => dispatch(setPosts(response.data)))
  // }
}