import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    let adminPhoto;
    let adminDisplayName;
    const adminData = sessionStorage.getItem("admin");
    const adminInfo = JSON.parse(adminData);
    if (adminInfo) {
        adminPhoto = adminInfo.photoURL;
        adminDisplayName = adminInfo.displayName;
    } else {
        adminPhoto = false;
        adminDisplayName = false;
    }
    return (
        <div className="list-group">
            <Link to="/" className="list-group-item list-group-item-action list-group-item-dark text-center"><img src={adminPhoto} className="rounded-circle" alt="UserPhoto" /></Link>
            <Link to="/about" className="list-group-item list-group-item-action list-group-item-secondary">{adminDisplayName}</Link>
            <Link to="/patientAdd" className="list-group-item list-group-item-action list-group-item-primary">Patient Add</Link>
            <Link to="/patientListByDate" className="list-group-item list-group-item-action list-group-item-success">List By Date</Link>
            <Link to="/patientList" className="list-group-item list-group-item-action list-group-item-info">Patient List</Link>
        </div>
    );
};

export default SideBar;