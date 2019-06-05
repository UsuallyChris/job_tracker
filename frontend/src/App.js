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
import Jobs from './components/layout/content/Jobs';
import Contacts from './components/layout/content/Contacts';
import Profile from './components/layout/content/Profile';
import AddJob from './components/layout/content/AddJob';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/profile' component={Profile}/>
          <Route exact path='/jobs' component={Jobs}/>
          <Route path='/jobs/add' component={AddJob}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
