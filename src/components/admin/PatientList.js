import React, { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import SideBar from './SideBar';

const Admin = () => {
    const [loggedInUser, setLoggedInUser, patientData, setPatientData] = useContext(UserContext);

    useEffect(() => {
        fetch("https://safe-wildwood-28382.herokuapp.com/viewAllPatient")
            .then(res => res.json())
            .then(data => setPatientData(data))
    }, [])

    return (
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
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Disease</th>
                                    <th>Treatment</th>
                                    <th>Total Bill</th>
                                    <th>Paid Bill</th>
                                    <th>Due Bill</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patientData.map(data =>
                                        <tr key={data._id}>
                                            <td>{data.createdDate}</td>
                                            <td>{data.patientName}</td>
                                            <td>{data.age}</td>
                                            <td>{data.disease}</td>
                                            <td>{data.treatment}</td>
                                            <td>${data.totalBill}</td>
                                            <td>${data.paidBill}</td>
                                            <td>${data.totalBill - data.paidBill}</td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;