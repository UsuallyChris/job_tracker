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
import Jobs from './components/layout/right/Jobs';
import Contacts from './components/layout/right/Contacts';
import Profile from './components/layout/right/Profile';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/profile' component={Profile}/>
          <Route path='/jobs' component={Jobs}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
