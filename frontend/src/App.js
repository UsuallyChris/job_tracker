import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// CSS Imports
import './css/Normalize.css';
import './css/App.css';

// Component Imports
import HomePage from './components/home_page/HomePage';

// Jobs
import Jobs from './components/layout/content/Jobs';
import AddJob from './components/layout/content/AddJob';
import JobDetail from './components/layout/content/JobDetail';
import UpdateJob from './components/layout/content/UpdateJob';

// Contacts
import Contacts from './components/layout/content/Contacts';
import AddContact from './components/layout/content/AddContact';
import ContactDetail from './components/layout/content/ContactDetail';

// Profile
import Profile from './components/layout/content/Profile';




function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>

          <Route exact path='/jobs' component={Jobs}/>
          <Route path='/jobs/add' component={AddJob}/>
          <Route exact path='/jobs/:id' component={JobDetail}/>
          <Route path='/jobs/:id/update' component={UpdateJob}/>
          
          <Route exact path='/contacts' component={Contacts}/>
          <Route path='/contacts/add' component={AddContact}/>
          <Route path='/contacts/:id' component={ContactDetail}/>
          
          <Route path='/profile' component={Profile}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
