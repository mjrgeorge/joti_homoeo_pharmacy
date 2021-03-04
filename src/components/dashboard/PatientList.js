import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SideBar from './SideBar';
import loading from '../../images/loading.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPrint, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Patient from './Patient';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser, patientData, setPatientData] = useContext(UserContext);

    useEffect(() => {
        fetch("https://safe-wildwood-28382.herokuapp.com/viewAllPatient")
            .then(res => res.json())
            .then(data => setPatientData(data))
    }, []);

    const allTotalPrice = patientData.map(data => data.totalBill);
    const allTotalPaid = patientData.map(data => data.paidBill);

    const totalPrice = allTotalPrice.reduce(
        (previousScore, currentScore) => Number(previousScore) + Number(currentScore), 0);

    const totalPaid = allTotalPaid.reduce(
        (previousScore, currentScore) => Number(previousScore) + Number(currentScore), 0);

    const totalDue = totalPrice - totalPaid;

    return (
        <>
            {
                patientData.length > 0 ?
                    <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 p-5 text-capitalize">
                        <div className="row">
                            <div className="col-lg-2">
                                <SideBar />
                            </div>
                            <div className="col-lg-10 table-responsive">
                                <div className="table-responsive">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th>S/R</th>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Disease</th>
                                                <th>Treatment</th>
                                                <th className="text-info">Total Bill</th>
                                                <th className="text-success">Paid Bill</th>
                                                <th className="text-danger">Due Bill</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                patientData.map((data) => <Patient key={data._id} data={data}/>)
                                            }
                                            <tr>
                                                <td colSpan="6">Total</td>
                                                <td className="h5 text-info">${totalPrice}</td>
                                                <td className="h5 text-success">${totalPaid}</td>
                                                <td className="h5 text-danger">${totalDue}</td>
                                                <td>
                                                    <Button variant="btn btn-outline-warning" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /></Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div style={{ minHeight: "70vh" }} className="container text-center shadow-lg mb-4 p-5">
                        <img className="img-fluid" src={loading} alt="Loading..." />
                    </div>
            }
        </>
    );
};

export default Dashboard;