import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const PatientAdd = () => {
    const [loggedInUser, setLoggedInUser, fakeData, setFakeData] = useContext(UserContext);
    return (
        <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 p-5">
            <div className="row">
                <div className="col-lg-2">
                    <div className="list-group">
                        <Link to="/" className="list-group-item list-group-item-action list-group-item-dark"><img src={loggedInUser.photoURL} className="rounded-circle" alt="UserPhoto" /></Link>
                        <Link to="/about" className="list-group-item list-group-item-action list-group-item-dark">{loggedInUser.displayName}</Link>
                        <Link to="/patientList" className="list-group-item list-group-item-action list-group-item-light">Patient List</Link>
                    </div>
                </div>
                <div className="col-lg-10">
                    <Table striped bordered hover size="sm" className="text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Disease</th>
                                <th>Total Bill</th>
                                <th>Paid Bill</th>
                                <th>Due Bill</th>
                                <th>Treatment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fakeData.map(data =>
                                    <tr key={data.id}>
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>{data.disease}</td>
                                        <td>${data.totalBill}</td>
                                        <td>${data.paidBill}</td>
                                        <td>${data.totalBill - data.paidBill}</td>
                                        <td>{data.treatment}</td>
                                    </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default PatientAdd;