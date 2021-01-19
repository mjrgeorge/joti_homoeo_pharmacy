import React from 'react';
import PatientAddForm from './PatientAddForm';
import SideBar from './SideBar';

const PatientAdd = () => {
    return (
        <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 p-5">
            <div className="row">
                <div className="col-lg-2">
                    <SideBar/>
                </div>
                <div className="col-lg-10">
                    <PatientAddForm/>
                </div>
            </div>
        </div>
    );
};

export default PatientAdd;