import { combineReducers } from 'redux';

import jobs from './jobs';
import contacts from './contacts';

export default combineReducers({
  jobs: jobs,
  contacts: contacts,
});