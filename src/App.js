import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs2 from './components/pages/AboutUs2';
import Cards2 from './components/pages/Cards2';
import Calendar2 from './components/pages/Calendar2';
import LinksSection2 from './components/pages/LinksSection2';
import OpenDay2 from './components/pages/OpenDay2';
import Space2 from './components/pages/Space2';


function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/AboutUs' component={AboutUs2}/>
        <Route path='/Space' component={Space2}/>
        <Route path='/Cards' component={Cards2}/>
        <Route path='/Calendar' component={Calendar2}/>
        <Route path='/LinksSection' component={LinksSection2}/>
        <Route path='/OpenDay' component={OpenDay2}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
