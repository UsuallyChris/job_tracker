import { GET_JOBS, DELETE_JOB, ADD_JOB } from '../actions/types';

const initialState = {
  jobs: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_JOBS:
      return{
        ...state,
        jobs: action.payload.sort( (a,b) => a.id < b.id )
      }

    case DELETE_JOB:
      return{
        ...state,
        jobs: state.jobs.filter(job => job.id !== action.payload).sort( (a,b) => a.id < b.id )
      };

    case ADD_JOB:
      return{
        ...state,
        jobs: [...state.jobs, action.payload].sort( (a,b) => a.id < b.id )
      }

    default:
      return state;
  }
}