import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar'
import Home from './containers/Home';
import Panier from './components/Panier'
import Electronics from './containers/Electronics';
import Jewelery from './containers/Jewelery';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/panier" component={Panier}/>
          <Route exact path="/electronics" component={Electronics}/>
          <Route exact path="/jewelery" component={Jewelery}/>
        </Switch>
      </main>
    </>
  )
}

export default App;
