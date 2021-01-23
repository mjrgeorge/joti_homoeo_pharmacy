import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import SideBar from './SideBar';

const Admin = () => {
    const [loggedInUser, setLoggedInUser, patientData, setPatientData] = useContext(UserContext);
    return (
        <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 p-5">
            <div className="row">
                <div className="col-lg-2">
                    <SideBar/>
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
                                {/* <th>Treatment</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patientData.map(data =>
                                    <tr key={data._id}>
                                        <td>{data.patientName}</td>
                                        <td>{data.age}</td>
                                        <td>{data.disease}</td>
                                        <td>${data.totalBill}</td>
                                        <td>${data.paidBill}</td>
                                        <td>${data.totalBill - data.paidBill}</td>
                                        {/* <td>{data.treatment}</td> */}
                                    </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Admin;