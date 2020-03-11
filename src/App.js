import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import HomePage from './Components/Home';
import FriendsPage from './Components/Friends';
import Header from './Components/Header/header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/friends' component={FriendsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
