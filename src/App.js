import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatePage = () => (
  <div>
    <h1>hate page</h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={HatePage}/>
      </switch>
    </div>
  );
}

export default App;