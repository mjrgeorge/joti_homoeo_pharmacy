import React, { createContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg from 'particles-bg';
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
import PatientList from './components/admin/PatientList';
import Login from './components/login/Login';
import PrivateRoute from './components/login/PrivateRoute';
import PatientAdd from './components/admin/PatientAdd';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [patientData, setPatientData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:30001/viewAllPatient")
    .then(res => res.json())
    .then(data => setPatientData(data))
  }, [])
  console.log(patientData);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, patientData, setPatientData]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/patientList">
            <PatientList />
          </Route>
          <Route path="/patientAdd">
            <PatientAdd />
          </Route>
          {/* <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute> */}
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
        <Footer />
        {/* <ParticlesBg type="color" bg={true} /> */}
      </Router>
    </UserContext.Provider>
  );
}

export default App;

    // "color"
    // "ball"
    // "lines"
    // "thick"
    // "circle"
    // "cobweb"
    // "polygon"
    // "square"
    // "tadpole"
    // "fountain"
    // "random"
    // "custom"