import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar'
import FetchData from './components/FetchData';
import Home from './containers/Home';
import Panier from './components/basket/Panier'
import Electronics from './containers/Electronics';
import Jewelery from './containers/Jewelery';
import MenClothing from './containers/MenClothing';
import WomenClothing from './containers/WomenClothing';


function App() {
  return (
    <>
      <Navbar />
      <FetchData />
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/panier" component={Panier}/>
          <Route exact path="/electronics" component={Electronics}/>
          <Route exact path="/jewelery" component={Jewelery}/>
          <Route exact path="/men/clothing" component={MenClothing}/>
          <Route exact path="/women/clothing" component={WomenClothing}/>
          
        </Switch>
      </main>
    </>
  )
}

export default App;
