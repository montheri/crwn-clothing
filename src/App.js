import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import SingInAndSignUpPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/SingIn' component={SingInAndSignUpPage}/>
        
      </switch>
    </div>
  );
}

export default App;