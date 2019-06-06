import axios from 'axios';

import { GET_JOBS, } from './types';

export const getJobs = () => dispatch => {
  axios.get('http://127.0.0.1:8000/api/jobs/')
    .then(res => {
      dispatch({
        type: GET_JOBS,
        payload: res.data
      })
    }).catch(err => console.log(err.response))
}