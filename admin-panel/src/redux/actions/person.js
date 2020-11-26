import request from '../../tools/Request'

export function setPersons(data) {
  return {
    type: 'PERSONS',
    payload: data
  }
}
export function setPerson(data) {
  return {
    type: 'PERSON',
    payload: data
  }
}

export function getPerson(id) {
  return dispatch => request(`/users/${id}`)
  .then(response => dispatch(setPerson(response.data)))
}
