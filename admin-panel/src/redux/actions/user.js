import {createAction} from '@reduxjs/toolkit'
import {message} from 'antd'

const user = createAction('USER')
const isLoggedIn = createAction('IS_LOGGED_IN')
const loginSubmitLoading = createAction('LOGIN_SUBMIT_LOADING')

export function login(data) {
  return dispatch => {
    dispatch(loginSubmitLoading(true))
    setTimeout(() => {
      if (data.username === 'admin' && data.password === '123') {
        dispatch(user({id: 1, name: 'SAli Mousavi', username: 'admin'}))
        dispatch(isLoggedIn(true))
      }
      else {
        message.error('نام کاربری یا رمز عبور صحیح نمی باشد')
      }
      dispatch(loginSubmitLoading(false))
    }, 1000)
  }
}

export function getUser() {
  return dispatch => {
    setTimeout(() => {
      dispatch(user({id: 1, name: 'SAli Mousavi', username: 'admin'}))
      dispatch(isLoggedIn(true))
    }, 500)
  }
}