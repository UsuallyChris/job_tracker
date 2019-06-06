import axios from 'axios';

import { GET_CONTACTS, } from './types';

export const getContacts = () => dispatch => {
  axios.get('http://127.0.0.1:8000/api/contacts/')
    .then(res => {
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      })
    }).catch(err => console.log(err.response))
}