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
import LeftContainer from './components/layout/left/LeftContainer';

import Jobs from './components/layout/right/Jobs';
import Contacts from './components/layout/right/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <LeftContainer />
        <Switch>
          <Route path='/jobs' component={Jobs}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
