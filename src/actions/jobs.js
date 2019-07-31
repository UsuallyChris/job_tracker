import axios from 'axios';

import { GET_JOBS, DELETE_JOB, ADD_JOB, } from './types';

export const getJobs = () => dispatch => {
  axios.get('http://127.0.0.1:8000/api/jobs/')
    .then(res => {
      dispatch({
        type: GET_JOBS,
        payload: res.data
      })
    }).catch(err => console.log(err.response))
}

export const deleteJob = (id) => dispatch => {
  axios.delete(`http://127.0.0.1:8000/api/jobs/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_JOB,
        payload: id
      })
    }).catch(err => console.log(err.response));
}

export const addJob = (job) => dispatch => {
  axios.post('http://127.0.0.1:8000/api/jobs/', job)
    .then(res => {
      dispatch({
        type: ADD_JOB,
        payload: res.data
      })
    }).catch(err => console.log(err.response));
}