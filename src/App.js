import React from 'react';
import Navbar from './componets/Navbar';
import './App.css';
import Home from './componets/pages/Home'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Recipe from './componets/pages/Recipe'
import Contact from './componets/pages/Contact'
import Signup from './componets/pages/Signup'



function App() {
  return ( 
    <>       
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Recipe' component={Recipe} />
        <Route path='/Contact'  component={Contact} />
        <Route path='/sign-up' component={Signup} />
      </Switch>
    </Router>  
    </>  
  );
}

export default App;
