import request from '../../tools/Request'
import axios from 'axios'
import { setPersons } from './person'

export function setPosts(payload) {
  return {
    type: 'POSTS',
    payload
  }
}

export function getPosts() {
  return dispatch => request({url: '/posts', entity: 'posts'})
    // .then(response => dispatch(setPosts(response.data)))

  // axios('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => dispatch(setPosts(response.data)))


  // return function(dispatch) {
  //   return axios('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => dispatch(setPosts(response.data)))
  // }
}