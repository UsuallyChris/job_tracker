import axios from 'axios';

import { GET_CONTACTS, DELETE_CONTACT, } from './types';

export const getContacts = () => dispatch => {
  axios.get('http://127.0.0.1:8000/api/contacts/')
    .then(res => {
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      })
    }).catch(err => console.log(err.response));
}

export const deleteContact = (id) => dispatch => {
  axios.delete(`http://127.0.0.1:8000/api/contacts/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      })
    }).catch(err => console.log(err.response));
}