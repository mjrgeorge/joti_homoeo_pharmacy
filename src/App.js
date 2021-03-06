import React, { createContext, useState } from 'react';
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
import PatientList from './components/dashboard/PatientList';
import Login from './components/login/Login';
import PrivateRoute from './components/login/PrivateRoute';
import PatientAdd from './components/dashboard/PatientAdd';
import PatientEdit from './components/dashboard/PatientUpdate';
import Calender from './components/dashboard/PatientListByDate';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [patientData, setPatientData] = useState([]);
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
          {/* <Route path="/patientList">
            <PatientList />
          </Route>
          <Route path="/patientAdd">
            <PatientAdd />
          </Route>
          <Route path="/updatePatient/:patientId">
            <PatientEdit />
          </Route>
          <Route path="/patientListByDate">
            <Calender />
          </Route> */}
          <PrivateRoute path="/patientList">
            <PatientList />
          </PrivateRoute>
          <PrivateRoute path="/patientAdd">
            <PatientAdd />
          </PrivateRoute>
          <PrivateRoute path="/updatePatient/:patientId">
            <PatientEdit />
          </PrivateRoute>
          <PrivateRoute path="/patientListByDate">
            <Calender />
          </PrivateRoute>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
        <Footer />
        <ParticlesBg
          type=
          // "color"
          // "ball"
          // "lines"
          // "thick"
          // "circle"
          // "cobweb"
          // "polygon"
          "square"
          // "tadpole"
          // "fountain"
          // "random"
          // "custom"
          bg={true} />
      </Router>
    </UserContext.Provider>
  );
}

export default App;