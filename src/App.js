import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './app/Navbar'
import FetchData from './features/products/FetchData';
import Home from './features/products/Home';
import Panier from './features/basket/Panier';
import Electronics from './features/products/Electronics';
import Jewelery from './features/products/Jewelery';
import MenClothing from './features/products/MenClothing';
import WomenClothing from './features/products/WomenClothing';
import Footer from './app/Footer';

function App() {
  return (
    <>
      <div className="content-wrap">
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
      </div>  
      <Footer />
    </>
  )
}

export default App;
