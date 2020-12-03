import axios from 'axios'
import {BASE_URL} from './Constants'
import store from '../redux/store'


axios.defaults.baseURL = BASE_URL
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Content-type'] = 'application/json'

const requestInstance = axios.create()

// Add a request interceptor
requestInstance.interceptors.request.use(function (config) {
  // console.log(config)

  // console.log(store.getState()[config.entity])
  // store.dispatch({
  //   type: config.entity.toUpperCase(),
  //   payload: {...store.getState()[config.entity], loading: true}
  // })

  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
requestInstance.interceptors.response.use(function (response) {
  // store.dispatch({
  //   type: response.config.entity.toUpperCase(),
  //   payload: { items: response.data, loading: false}
  // })
  return response;
}, function (error) {
  return Promise.reject(error);
});

export const request = requestInstance
export default request