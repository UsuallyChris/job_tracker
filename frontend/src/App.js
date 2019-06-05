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

// Contacts
import Contacts from './components/layout/content/Contacts';
import AddContact from './components/layout/content/AddContact';

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
          <Route path='/jobs/:id' component={JobDetail}/>
          
          <Route exact path='/contacts' component={Contacts}/>
          <Route path='/contacts/add' component={AddContact}/>
          
          <Route path='/profile' component={Profile}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
