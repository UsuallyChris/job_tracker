import { GET_JOBS, DELETE_JOB } from '../actions/types';

const initialState = {
  jobs: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_JOBS:
      return{
        ...state,
        jobs: action.payload
      }

    case DELETE_JOB:
      return{
        ...state,
        jobs: state.jobs.filter(job => job.id !== action.payload)
      };

    default:
      return state;
  }
}