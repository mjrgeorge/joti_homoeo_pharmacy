import { faHistory, faPen, faPrint, faTrashAlt, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

const Calender = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [patientList, setPatientList] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
        handleClose();
    }
    useEffect(() => {
        fetch('https://safe-wildwood-28382.herokuapp.com/patientListByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => setPatientList(data))
    }, [selectedDate])

    const handleDelete = (id) => {
        if (window.confirm("Are You Sure Delete This Patient")) {
            fetch(`https://safe-wildwood-28382.herokuapp.com/deletePatient/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        alert("Patient Information Successfully Deleted.")
                    }
                })
        }
    };

    const allTotalPrice = patientList.map(data => data.totalBill);
    const allTotalPaid = patientList.map(data => data.paidBill);

    const totalPrice = allTotalPrice.reduce(
        (previousScore, currentScore) => Number(previousScore) + Number(currentScore), 0);

    const totalPaid = allTotalPaid.reduce(
        (previousScore, currentScore) => Number(previousScore) + Number(currentScore), 0);

    const totalDue = totalPrice - totalPaid;

    return (
        <div style={{ minHeight: "70vh" }} className="container shadow-lg mb-4 p-5 text-capitalize">
            <div>
                <div className="d-flex justify-content-center p-2">
                    {
                        patientList.length ?
                            <Button variant="btn btn-outline-warning" onClick={handleShow}>Are You Search Another Date? Please Click Me.</Button>
                            :
                            <Button variant="btn btn-outline-danger" onClick={handleShow}>Please Click Here, And Select Your Expected Date From Calender.</Button>
                    }

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Select Your Expected Date</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex justify-content-center">
                            <Calendar
                                onChange={handleDateChange}
                                value={new Date()}
                            />
                        </Modal.Body>
                    </Modal>
                </div>
                {
                    patientList.length ?
                        <div className="table-responsive">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th>Page</th>
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
                                        patientList.map(patient => <tr key={patient._id}>
                                            <td>{patient.pageNumber}</td>
                                            <td>{patient.date.slice(0, 10)}</td>
                                            <td className="h6">{patient.patientName}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.disease}</td>
                                            <td>{patient.treatment}</td>
                                            <td className="text-info">${patient.totalBill}</td>
                                            <td className="text-success">${patient.paidBill}</td>
                                            <td className="text-danger">${patient.totalBill - patient.paidBill}</td>
                                            <td role="button" className="d-flex justify-content-between align-items-center">
                                                <Link to={`/updatePatient/${patient._id}`}>
                                                    <FontAwesomeIcon className="text-dark" icon={faPen} />
                                                </Link>
                                                <FontAwesomeIcon className="text-danger" icon={faTrashAlt} onClick={() => handleDelete(`${patient._id}`)} />
                                            </td>
                                        </tr>)
                                    }
                                    <tr>
                                        <td colSpan="6" className="h5">Total</td>
                                        <td className="h5 text-info">${totalPrice}</td>
                                        <td className="h5 text-success">${totalPaid}</td>
                                        <td className="h5 text-danger">${totalDue}</td>
                                        <td role="button" className="d-flex justify-content-between align-items-center">
                                            <Link to={`/patientList`}>
                                                <FontAwesomeIcon className="text-dark" icon={faHistory} />
                                            </Link>
                                            <FontAwesomeIcon className="text-danger" icon={faPrint} onClick={() => window.print()} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        :
                        <div>
                            <p className="text-center text-warning p-4">
                                <span className="text-danger">Not Found!</span>
                                <br></br>
                            Please Carefully Select Your Expected Date.
                        </p>
                            <div className="text-right">
                                <Link to="/patientList" className="text-info">
                                    <FontAwesomeIcon className="h4" icon={faArrowCircleLeft} />
                                </Link>
                            </div>
                        </div>
                }
            </div>
        </div >
    );
};

export default Calender;