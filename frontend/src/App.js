import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// Redux Imports
import { Provider } from 'react-redux';
import store from './store';

// CSS Imports
import './css/Normalize.css';
import './css/App.css';

// Jobs
import Jobs from './components/jobs/Jobs';
import AddJob from './components/jobs/AddJob';
import JobDetail from './components/jobs/JobDetail';
import UpdateJob from './components/jobs/UpdateJob';

// Contacts
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import ContactDetail from './components/contacts/ContactDetail';
import UpdateContact from './components/contacts/UpdateContact';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Jobs}/>

            <Route exact path='/jobs' component={Jobs}/>
            <Route path='/jobs/add' component={AddJob}/>
            <Route exact path='/jobs/:id' component={JobDetail}/>
            <Route path='/jobs/:id/update' component={UpdateJob}/>
            
            <Route exact path='/contacts' component={Contacts}/>
            <Route path='/contacts/add' component={AddContact}/>
            <Route exact path='/contacts/:id' component={ContactDetail}/>
            <Route path='/contacts/:id/update' component={UpdateContact}/>
            
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
