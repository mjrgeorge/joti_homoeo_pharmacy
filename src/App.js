import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import NotMatch from './components/notMatch/NotMatch';
import Contact from './components/contact/Contact';
import Blogs from './components/blogs/Blogs';
import About from './components/about/About';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;