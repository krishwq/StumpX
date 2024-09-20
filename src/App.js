// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Tournaments from './pages/Tournaments';
import Teams from './pages/Teams';
import Contact from './pages/Contact';
import Navbar from './componet/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" >
        
        </Route>
        <Route path="/about" component={About} />
        <Route path="/tournaments" component={Tournaments} />
        <Route path="/teams" component={Teams} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
