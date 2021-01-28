import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser, patientData, setPatientData] = useContext(UserContext);
    return (
        <div className="list-group">
            <Link to="/" className="list-group-item list-group-item-action list-group-item-dark"><img src={loggedInUser.photoURL} className="rounded-circle" alt="UserPhoto" /></Link>
            <Link to="/about" className="list-group-item list-group-item-action list-group-item-secondary">{loggedInUser.displayName}</Link>
            <Link to="/patientAdd" className="list-group-item list-group-item-action list-group-item-primary">Patient Add</Link>
            <Link to="/patientList" className="list-group-item list-group-item-action list-group-item-info">Patient List</Link>
        </div>
    );
};

export default SideBar;