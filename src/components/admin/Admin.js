import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const fakeData = [
        {
            id: "1",
            name: "Rathin",
            age: "36",
            disease: "Hair",
            treatment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nisi.",
            totalBill: "420",
            paidBill: "400"
        },
        {
            id: "2",
            name: "George",
            age: "33",
            disease: "Pain",
            treatment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nisi.",
            totalBill: "500",
            paidBill: "100"
        },
        {
            id: "3",
            name: "Runa",
            age: "36",
            disease: "Fiver",
            treatment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nisi.",
            totalBill: "420",
            paidBill: "400"
        },
        {
            id: "3",
            name: "Jain",
            age: "7",
            disease: "Hairr",
            treatment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nisi.",
            totalBill: "400",
            paidBill: "400"
        }
    ];

    return (
        <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 p-5">
            <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center">
                    <div class="alert alert-success" role="alert">{loggedInUser.displayName}</div>
                </div>
                <div>
                    <img src={loggedInUser.photoURL} className="rounded-circle" alt="UserPhoto" />
                </div>
            </div>
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
    );
};

export default Admin;